/// <reference types="vite/client" />

import { Suspense } from 'react'

import { hydrateRoot, createRoot } from 'react-dom/client'

import App from './App'
import { ServerContextProvider } from './entry-server'
/**
 * When `#redwood-app` isn't empty then it's very likely that you're using
 * prerendering. So React attaches event listeners to the existing markup
 * rather than replacing it.
 * https://reactjs.org/docs/react-dom-client.html#hydrateroot
 */
hydrateRoot(document, <App />)
