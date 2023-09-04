import { render } from '@redwoodjs/testing/web'

import CategoriesLoader from './CategoriesLoader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CategoriesLoader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CategoriesLoader />)
    }).not.toThrow()
  })
})
