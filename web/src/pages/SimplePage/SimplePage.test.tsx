import { render } from '@redwoodjs/testing/web'

import SimplePage from './SimplePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SimplePage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SimplePage />)
    }).not.toThrow()
  })
})
