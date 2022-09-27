import { render } from '@redwoodjs/testing/web'

import NavLayout from './NavLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('NavLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NavLayout />)
    }).not.toThrow()
  })
})
