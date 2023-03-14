import React from 'react'

import { LocationProvider } from '@redwoodjs/router'

import App from './App'
import { Document } from './Document'

const ServerContext = React.createContext({})

export const {
  Provider: ServerContextProvider,
  Consumer: ServerContextConsumer,
} = ServerContext

export const useServerData = () => {
  return React.useContext(ServerContext)
}

export const serverEntry = ({ routeContext, url, css, meta }) => {
  return (
    <ServerContextProvider value={routeContext}>
      <LocationProvider
        location={{
          pathname: url,
        }}
      >
        <Document css={css} meta={meta}>
          <App />
        </Document>
      </LocationProvider>
    </ServerContextProvider>
  )
}
