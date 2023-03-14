/* eslint-disable @typescript-eslint/no-namespace */
import path from 'path'

import { config } from 'dotenv-defaults'
import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { renderToPipeableStream } from 'react-dom/server'

import { getPaths } from '@redwoodjs/internal/dist/paths'

globalThis.RWJS_ENV = {}

// ---- This is for debugging purposes only ----
// We need the dotenv, so that prisma knows the DATABASE env var
// Normally the RW cli loads this for us.... something to think about
config({
  path: path.join(getPaths().base, '.env'),
  defaults: path.join(getPaths().base, '.env.defaults'),
  multiline: true,
})
//------------------------------------------------

const rwjsPaths = getPaths()

async function createServer() {
  const app = express()

  interface RWRouteManifest {
    matchRegexString: string
    routeHooks: string | undefined
  }

  interface ViteManifestItem {
    css?: string[]
    dynamicImports?: string[]
    file: string
    isEntry?: boolean // only exists for html
    imports: string[]
    src?: string // only exists for html,png,etc.
  }

  const routeManifest: Record<string, RWRouteManifest> = await import(
    rwjsPaths.web.dist + '/server/route-manifest.json',
    { assert: { type: 'json' } }
  )

  const buildManifest: Record<string, ViteManifestItem> = await import(
    rwjsPaths.web.dist + '/build-manifest.json',
    { assert: { type: 'json' } }
  )

  const indexEntry = Object.values(buildManifest).find((manifestItem) => {
    return manifestItem.isEntry
  }) as ViteManifestItem

  // @TODO Use getConfig() to configure it
  // Also be careful of differences between v2 and v3 of the server
  // Proxy the api server
  app.use(
    '/.redwood/functions',
    // @WARN! Be careful, between v2 and v3 of http-proxy-middleware
    // the syntax has changed https://github.com/chimurai/http-proxy-middleware
    createProxyMiddleware({
      changeOrigin: true,
      pathRewrite: {
        [`^/.redwood/functions`]: '', // remove base path
      },
      target: 'http://localhost:8911',
    })
  )

  app.use('/assets', express.static(rwjsPaths.web.dist + '/assets'))

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      const currentRoute = Object.values(routeManifest).find(
        (route: RWRouteManifest) => {
          if (!route.matchRegexString) {
            // This is the 404/NotFoundPage case
            return false
          }

          const matches = [
            ...url.matchAll(new RegExp(route.matchRegexString, 'g')),
          ]
          return matches.length > 0
        }
      )

      // Doesn't match any of the defined Routes
      // So pass it on to the static asset handler
      if (!currentRoute) {
        return next()
      }

      let routeContext = {}
      if (currentRoute && currentRoute.routeHooks) {
        try {
          const routeHooks = await import(
            rwjsPaths.web.dist + '/server/routeHooks/' + currentRoute.routeHooks
          )
          const serverData = await routeHooks.serverData(req)

          routeContext = {
            ...serverData,
          }
        } catch (e) {
          console.error(e)
        }
      }

      // 3. Load the server entry. vite.ssrLoadModule automatically transforms
      //    your ESM source code to be usable in Node.js! There is no bundling
      //    required, and provides efficient invalidation similar to HMR.
      const { serverEntry } = await import(
        rwjsPaths.web.dist + '/server/entry-server.js'
      )

      // Serialize route context so it can be passed to the client entry
      const serialisedRouteContext = JSON.stringify(routeContext)

      const { pipe } = renderToPipeableStream(
        // @TODO: we can pass in meta here as well
        // we should use the same shape as Remix or Next for the meta object
        serverEntry({ url, routeContext, css: indexEntry.css }),
        {
          bootstrapScriptContent: `window.__loadServerData = function() { return ${serialisedRouteContext} }; window.__assetMap = function() { return ${JSON.stringify(
            { css: indexEntry.css }
          )} }`,
          // @NOTE have to add slash so subpaths still pick up the right file
          // @TODO, also add the bundles from routeManifest
          bootstrapModules: ['/' + indexEntry.file],
          onShellReady() {
            res.setHeader('content-type', 'text/html')
            pipe(res)
          },
        }
      )
    } catch (e) {
      // send back a SPA page
      // res.status(200).set({ 'Content-Type': 'text/html' }).end(template)

      // If an error is caught, let Vite fix the stack trace so it maps back to
      // your actual source code.
      next(e)
    }
  })

  // @TODO @FIXME we are intercepting all requests in the handler above
  // So static assets aren't being served.....
  // Serve the static assets
  // app.use(express.static(rwjsPaths.web.dist))

  app.listen(9173)
  console.log('Started server on 9173')
}

createServer()
