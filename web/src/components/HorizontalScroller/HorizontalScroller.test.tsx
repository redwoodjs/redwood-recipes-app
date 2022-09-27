import { render } from '@redwoodjs/testing/web'

import HorizontalScroller from './HorizontalScroller'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HorizontalScroller', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HorizontalScroller />)
    }).not.toThrow()
  })
})
