import { StrictMode } from 'react'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
// import SimplePage from 'src/pages/SimplePage'
import Routes from 'src/Routes'

import { AuthProvider, useAuth } from './auth'

// import './scaffold.css'
// import './index.css'

const App = () => {
  return (
    <html lang="en">
      <head>
        <meta />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="stylesheet" href="/index.css" />
        <link rel="stylesheet" href="/scaffold.css" />
      </head>

      <body>
        <div id="redwood-app">
          <FatalErrorBoundary page={FatalErrorPage}>
            <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
              <AuthProvider>
                <RedwoodApolloProvider useAuth={useAuth}>
                  {/* <SimplePage /> */}
                  <Routes />
                </RedwoodApolloProvider>
              </AuthProvider>
            </RedwoodProvider>
          </FatalErrorBoundary>
        </div>
      </body>
    </html>
  )
}

export default App
