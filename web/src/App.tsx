// import routes from 'virtual:rw-routes'

import { FatalErrorBoundary, RedwoodProvider } from '@redwoodjs/web'
import { RedwoodApolloProvider } from '@redwoodjs/web/apollo'

import FatalErrorPage from 'src/pages/FatalErrorPage'
// import SimplePage from 'src/pages/SimplePage'
import Routes from 'src/Routes'

import { AuthProvider, useAuth } from './auth'

import './scaffold.css'
import './index.css'

const App = () => {
  return (
    <FatalErrorBoundary page={FatalErrorPage}>
      <RedwoodProvider titleTemplate="%PageTitle | %AppTitle">
        <AuthProvider>
          <RedwoodApolloProvider useAuth={useAuth}>
            <Routes />
          </RedwoodApolloProvider>
        </AuthProvider>
      </RedwoodProvider>
    </FatalErrorBoundary>
  )
}

export default App
