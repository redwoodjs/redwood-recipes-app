import type { ComponentMeta, ComponentStory } from '@storybook/react'

import RecipePage from './RecipePage'

export const generated: ComponentStory<typeof RecipePage> = (args) => {
  return <RecipePage id={'42'} {...args} />
}

export default {
  title: 'Pages/RecipePage',
  component: RecipePage,
} as ComponentMeta<typeof RecipePage>
