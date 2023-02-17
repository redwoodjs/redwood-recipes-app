import React, { Suspense } from 'react'

import { renderToString } from 'react-dom/server'

import { LocationProvider } from '@redwoodjs/router'

import App from './App'

const ServerContext = React.createContext()

export const {
  Provider: ServerContextProvider,
  Consumer: ServerContextConsumer,
} = ServerContext

export const useServerData = () => {
  return React.useContext(ServerContext)
}

export const render = (routeContext, url) => {
  return renderToString(
    <Suspense>
      <ServerContextProvider value={routeContext}>
        <LocationProvider
          location={{
            pathname: url,
          }}
          mode="sync"
        >
          <App />
        </LocationProvider>
      </ServerContextProvider>
    </Suspense>
  )
}
