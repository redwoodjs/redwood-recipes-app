import { Suspense } from 'react'

import { hydrateRoot, createRoot } from 'react-dom/client'

import App from './App'
/**
 * When `#redwood-app` isn't empty then it's very likely that you're using
 * prerendering. So React attaches event listeners to the existing markup
 * rather than replacing it.
 * https://reactjs.org/docs/react-dom-client.html#hydrateroot
 */
const redwoodAppElement = document.getElementById('redwood-app')

if (redwoodAppElement.children?.length > 0) {
  console.log('Definitely hydrating')
  hydrateRoot(
    redwoodAppElement,
    <Suspense>
      <App />
    </Suspense>
  )
} else {
  console.log('Rendering from scratch 🇦🇼🇦🇼')
  const root = createRoot(redwoodAppElement)
  root.render(<App />)
}
