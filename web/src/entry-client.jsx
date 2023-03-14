/// <reference types="vite/client" />

import { Suspense } from 'react'

import { hydrateRoot, createRoot } from 'react-dom/client'

import App from './App'
import { Document } from './Document'
import { ServerContextProvider } from './entry-server'
/**
 * When `#redwood-app` isn't empty then it's very likely that you're using
 * prerendering. So React attaches event listeners to the existing markup
 * rather than replacing it.
 * https://reactjs.org/docs/react-dom-client.html#hydrateroot
 */
const redwoodAppElement = document.getElementById('redwood-app')

if (redwoodAppElement.children?.length > 0) {
  console.log('definitely hydrating 🇨🇭🇨🇭🇨🇭🇨🇭')
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
  root.render(<App />)
}
