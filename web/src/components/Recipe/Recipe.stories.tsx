// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Recipe> = (args) => {
//   return <Recipe {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Recipe from './Recipe'

export const generated = () => {
  return <Recipe />
}

export default {
  title: 'Components/Recipe',
  component: Recipe,
} as ComponentMeta<typeof Recipe>
