// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SaveToMyRecipesButton> = (args) => {
//   return <SaveToMyRecipesButton {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SaveToMyRecipesButton from './SaveToMyRecipesButton'

export const generated = () => {
  return <SaveToMyRecipesButton id="bazinga" />
}

export default {
  title: 'Components/SaveToMyRecipesButton',
  component: SaveToMyRecipesButton,
} as ComponentMeta<typeof SaveToMyRecipesButton>
