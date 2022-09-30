import { mockRedwoodDirective, getDirectiveName } from '@redwoodjs/testing/api'

import requireAuth from './requireAuth'

describe('requireAuth directive', () => {
  it('declares the directive sdl as schema, with the correct name', () => {
    expect(requireAuth.schema).toBeTruthy()
    expect(getDirectiveName(requireAuth.schema)).toBe('requireAuth')
  })

  it('requireAuth does not throw when current user present', () => {
    // If you want to set values in context, pass it through e.g.
    const mockExecution = mockRedwoodDirective(requireAuth, {
      context: { currentUser: { id: 1, roles: 'USER' } },
    })

    expect(mockExecution).not.toThrowError()
  })

  it('requireAuth throws if no currentUser present in context', () => {
    const mockExecution = mockRedwoodDirective(requireAuth, {
      context: {},
    })

    expect(mockExecution).toThrowError(`You don't have permission to do that`)
  })

  it('requireAuth throws if currentUser does not have role JEDI', () => {
    // @requireAuth(roles: ['SOMETHINGELSE'])
    const mockExecution = mockRedwoodDirective(requireAuth, {
      context: { currentUser: { id: 1, roles: 'SOMETHINGELSE' } },
      directiveArgs: {
        roles: ['JEDI'], // <-- this is the required role
      },
    })

    expect(mockExecution).toThrowError(`You don't have access to do that.`)
  })

  it('requireAuth allows currentUser if they have specified role JEDI', () => {
    // @requireAuth(roles: ['JEDI'])
    const mockExecution = mockRedwoodDirective(requireAuth, {
      context: { currentUser: { id: 1, roles: 'JEDI' } }, //<-- mock the user
      directiveArgs: {
        roles: ['JEDI'], // <-- this is the required role
      },
    })

    expect(mockExecution).not.toThrowError()
  })
})
