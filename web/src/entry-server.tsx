import { LocationProvider } from '@redwoodjs/router'
import { ServerContextProvider } from '@redwoodjs/web'

import App from './App'
import { Document } from './Document'

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
