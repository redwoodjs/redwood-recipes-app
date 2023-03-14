/* eslint-disable @typescript-eslint/no-namespace */
import path from 'path'

import { config } from 'dotenv-defaults'
import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'
import { renderToPipeableStream } from 'react-dom/server'

// @MARK CAREFUL! This is an internal import
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

  /** Example
   *
   *  "/simple": {
    "name": "simple",
    "bundle": "assets/SimplePage-d4142a30.js",
    "matchRegexString": "^/simple$",
    "routePath": "/simple",
    "routeHooks": null
  }
   *
  */

  interface RWRouteManifest {
    matchRegexString: string
    routeHooks: string | null
    bundle: string
    routePath: string
    name: string
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

  // 👉 1. Use static handler for assets
  // For CF workers, we'd need an equivalent of this
  app.use('/assets', express.static(rwjsPaths.web.dist + '/assets'))

  // 👉 2. Proxy the api server
  // @TODO Use getConfig() to configure it
  // Also be careful of differences between v2 and v3 of the server
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

  // 👉 3. Handle all other requests with the server entry
  // This is where we match the url to the correct route, and render it
  // We also call the relevant routeHooks here
  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      // @TODO should we generate individual express Routes for each Route?
      // This would make handling 404s and favicons / public assets etc. easier
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
      // So pass it on to the 404 handler
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
          bootstrapModules: ['/' + indexEntry.file, '/' + currentRoute.bundle],
          onShellReady() {
            res.setHeader('content-type', 'text/html')
            pipe(res)
          },
        }
      )
    } catch (e) {
      // streaming no longer requires us to send back a blank page
      // React will automatically switch to client rendering on error
      next(e)
    }
  })

  app.listen(9173)
  console.log('Started server on 9173')
}

createServer()
