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

import Recipe, { RecipeProps } from './Recipe'

const mockedRecipe: RecipeProps['recipe'] = {
  name: 'The Ultimate Recipe',
  blurb: 'This is a special recipe brought to you by RedwoodJS',
  imageUrl:
    'https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
  content: `# Hello World
You can write your recipe in markdown here.,
        `,
}

export const generated = () => {
  return <Recipe recipe={mockedRecipe} />
}

export default {
  title: 'Components/Recipe',
  component: Recipe,
} as ComponentMeta<typeof Recipe>
