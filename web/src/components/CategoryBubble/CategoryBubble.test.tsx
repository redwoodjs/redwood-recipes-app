import { render } from '@redwoodjs/testing/web'

import CategoryBubble from './CategoryBubble'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CategoryBubble', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CategoryBubble />)
    }).not.toThrow()
  })
})
