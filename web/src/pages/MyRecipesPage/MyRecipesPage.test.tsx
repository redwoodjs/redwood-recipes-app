import { render } from '@redwoodjs/testing/web'

import MyRecipesPage from './MyRecipesPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('MyRecipesPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MyRecipesPage />)
    }).not.toThrow()
  })
})
