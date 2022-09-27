import { render } from '@redwoodjs/testing/web'

import Recipe from './Recipe'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Recipe', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Recipe />)
    }).not.toThrow()
  })
})
