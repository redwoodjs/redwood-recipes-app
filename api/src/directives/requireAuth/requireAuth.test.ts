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
      context: { currentUser: { id: 1 } },
    })

    expect(mockExecution).not.toThrowError()
  })

  it('requireAuth throws if no currentUser present in context', () => {
    const mockExecution = mockRedwoodDirective(requireAuth, {
      context: {},
    })

    expect(mockExecution).toThrowError(`You don't have permission to do that`)
  })
})
