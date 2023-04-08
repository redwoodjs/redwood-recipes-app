import directives from 'api/src/directives/**/*.{js,ts}'
import sdls from 'api/src/graphql/**/*.sdl.{js,ts}'
import { getCurrentUser } from 'api/src/lib/auth'
import { db } from 'api/src/lib/db'
import { logger } from 'api/src/lib/logger'
import services from 'api/src/services/**/*.{js,ts}'

import { authDecoder } from '@redwoodjs/auth-dbauth-api'
import { createGraphQLHandler } from '@redwoodjs/graphql-server'

export const handler = createGraphQLHandler({
  getCurrentUser,
  authDecoder,
  loggerConfig: { logger, options: {} },
  directives,
  sdls,
  services,
  onException: () => {
    // Disconnect from your database with an unhandled exception.
    db.$disconnect()
  },
})
