/* eslint-disable @typescript-eslint/no-namespace */
import path from 'path'

import { config } from 'dotenv-defaults'
import express from 'express'
import { renderToPipeableStream } from 'react-dom/server'
import { createServer as createViteServer } from 'vite'

import { getPaths } from '@redwoodjs/internal/dist/paths.js'
import type { VirtualRoute } from '@redwoodjs/vite'

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

async function createServer() {
  const app = express()

  // Create Vite server in middleware mode and configure the app type as
  // 'custom', disabling Vite's own HTML serving logic so parent server
  // can take control
  const vite = await createViteServer({
    configFile: '../web/vite.config.ts',
    server: { middlewareMode: true },
    logLevel: 'info',
    clearScreen: false,
    appType: 'custom',
  })

  // use vite's connect instance as middleware
  // if you use your own express router (express.Router()), you should use router.use
  app.use(vite.middlewares)

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl
    try {
      // @MARK: using virtual modules here, so we can actually find the chunk we need! 🤯
      // I'm not convinved we need virtual modules anymore..... or we'd need to rollup the logic in serveBuilt
      // into a function in internal, and generate the virtual module using it
      const { default: routes } = (await vite.ssrLoadModule(
        'virtual:rw-routes'
      )) as { default: VirtualRoute[] }

      const currentRoute = routes.find((route) => {
        if (!route.matchRegexString) {
          // This is the 404/NotFoundPage case
          return false
        }

        const matches = [
          ...url.matchAll(new RegExp(route.matchRegexString, 'g')),
        ]
        return matches.length > 0
      })

      let routeContext = {}
      if (currentRoute && currentRoute.routeHooks) {
        try {
          const routeHooks = await vite.ssrLoadModule(currentRoute.routeHooks)
          const serverData = await routeHooks.serverData(req)

          routeContext = {
            ...serverData,
          }
        } catch (e) {
          console.error(e)
        }
      }

      if (!currentRoute) {
        // @TODO do something
      }

      console.log(`👉 \n ~ file: devMe.ts:66 ~ currentRoute:`, currentRoute)

      // 3. Load the server entry. vite.ssrLoadModule automatically transforms
      //    your ESM source code to be usable in Node.js! There is no bundling
      //    required, and provides efficient invalidation similar to HMR.
      const { serverEntry } = await vite.ssrLoadModule('web/src/entry-server')

      // Serialize route context so it can be passed to the client entry
      const serialisedRouteContext = JSON.stringify(routeContext)

      const { pipe } = renderToPipeableStream(
        // CSS is handled by Vite in dev mode, we don't need to worry about it in dev
        serverEntry({ url, routeContext, css: [] }),
        {
          bootstrapScriptContent: `window.__loadServerData = function() { return ${serialisedRouteContext} }`,
          bootstrapModules: [
            '/bootstrapScript.js', // Bootstrap is Vite react HMR stuff
            '/entry-client.jsx',
          ],
          onAllReady() {
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
      vite.ssrFixStacktrace(e as any)
      next(e)
    }
  })

  app.listen(5173)
  console.log('Started server on 5173')
}

createServer()
