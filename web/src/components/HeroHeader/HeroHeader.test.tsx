import { render } from '@redwoodjs/testing/web'

import HeroHeader from './HeroHeader'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HeroHeader', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeroHeader />)
    }).not.toThrow()
  })
})
