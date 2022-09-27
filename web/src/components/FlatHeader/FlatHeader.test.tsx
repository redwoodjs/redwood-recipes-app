import { render } from '@redwoodjs/testing/web'

import FlatHeader from './FlatHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('FlatHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FlatHeader />)
    }).not.toThrow()
  })
})
