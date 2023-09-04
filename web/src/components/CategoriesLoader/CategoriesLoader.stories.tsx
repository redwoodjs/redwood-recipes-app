// Pass props to your component by passing an `args` object to your story
//
// ```jsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import CategoriesLoader from './CategoriesLoader'

const meta: Meta<typeof CategoriesLoader> = {
  component: CategoriesLoader,
}

export default meta

type Story = StoryObj<typeof CategoriesLoader>

export const Primary: Story = {}
