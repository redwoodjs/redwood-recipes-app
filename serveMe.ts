/* eslint-disable @typescript-eslint/no-namespace */
import fs from 'fs'
import path from 'path'

import { config } from 'dotenv-defaults'
import express from 'express'
import { renderToPipeableStream } from 'react-dom/server'
import { createServer as createViteServer } from 'vite'

import { getPaths } from '@redwoodjs/internal/dist/paths.js'

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
    configFile: 'web/vite.config.ts',
    server: { middlewareMode: true },
    appType: 'custom',
  })

  // use vite's connect instance as middleware
  // if you use your own express router (express.Router()), you should use router.use
  app.use(vite.middlewares)

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl

    try {
      // @MARK: using virtual modules here, so we can actually find the chunk we need! 🤯
      const { default: routes } = await vite.ssrLoadModule('virtual:rw-routes')

      const route = routes.find((route: any) => {
        // @MARK: we need to match!
        // matchPathToUrl(route.path, url)
        return route.path === url
      })

      let routeContext = {}
      if (route && route.routeHooks) {
        try {
          const routeHooks = await vite.ssrLoadModule(route.routeHooks)
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
      const { serverEntry } = await vite.ssrLoadModule('web/src/entry-server')

      // Serialize route context so it can be passed to the client entry
      const serialisedRouteContext = JSON.stringify(routeContext)

      const { pipe } = renderToPipeableStream(
        serverEntry({ url, routeContext }),
        {
          bootstrapScriptContent: `window.__loadServerData = function() { return ${serialisedRouteContext} }`,
          bootstrapModules: ['/bootstrapScript.js', '/entry-client.jsx'],
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
      vite.ssrFixStacktrace(e as any)
      next(e)
    }
  })

  app.listen(5173)
  console.log('Started server on 5173')
}

createServer()
