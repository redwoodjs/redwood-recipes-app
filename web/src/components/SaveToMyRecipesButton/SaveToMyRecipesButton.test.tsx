import { render } from '@redwoodjs/testing/web'

import SaveToMyRecipesButton from './SaveToMyRecipesButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SaveToMyRecipesButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SaveToMyRecipesButton id="bazinga" />)
    }).not.toThrow()
  })
})
