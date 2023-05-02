/// <reference types="vite/client" />

import { hydrateRoot, createRoot } from 'react-dom/client'

// @NOTE: temporary workaround
import { ServerContextProvider } from '@redwoodjs/web/dist/serverContext'

import App from './App'
import { Document } from './Document'
/**
 * When `#redwood-app` isn't empty then it's very likely that you're using
 * prerendering. So React attaches event listeners to the existing markup
 * rather than replacing it.
 * https://reactjs.org/docs/react-dom-client.html#hydrateroot
 */
const redwoodAppElement = document.getElementById('redwood-app')

if (redwoodAppElement.children?.length > 0) {
  hydrateRoot(
    document,
    <ServerContextProvider value={window.__loadServerData?.()}>
      <Document css={window.__assetMap?.().css}>
        <App />
      </Document>
    </ServerContextProvider>
  )
} else {
  console.log('Rendering from scratch 🇦🇼🇦🇼')
  const root = createRoot(document)
  root.render(
    <Document css={window.__assetMap?.().css}>
      <App />
    </Document>
  )
}
