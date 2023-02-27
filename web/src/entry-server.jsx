import React from 'react'

import { renderToPipeableStream } from 'react-dom/server'

import { LocationProvider } from '@redwoodjs/router'

// @MARK if we do this, vite will also transform the routehooks
// Note that if we don't console.log, vite removes the unnecessary import, and won't produce it in the dist
// Not clear yet if we should do it this way, or just transform routeHooks along with the server
// const routeHooks = import.meta.glob('/pages/**/*.routeHooks.{js,jsx,ts,tsx}')
// console.log(`👉 \n ~ file: entry-server.jsx:8 ~ routeHooks:`, routeHooks)

import App from './App'

const ServerContext = React.createContext()

export const {
  Provider: ServerContextProvider,
  Consumer: ServerContextConsumer,
} = ServerContext

export const useServerData = () => {
  return React.useContext(ServerContext)
}

export const render = (routeContext, url, res) => {
  const { pipe } = renderToPipeableStream(
    <ServerContextProvider value={routeContext}>
      <LocationProvider
        location={{
          pathname: url,
        }}
        mode="sync"
      >
        <App />
      </LocationProvider>
    </ServerContextProvider>,
    {
      // bootstrapScripts: [],
      bootstrapModules: ['/bootstrapScript.js', '/entry-client.jsx'],
      onShellReady() {
        res.setHeader('content-type', 'text/html')
        pipe(res)
      },
    }
  )
}
