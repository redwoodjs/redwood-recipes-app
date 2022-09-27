import type { ComponentMeta, ComponentStory } from '@storybook/react'

import NavLayout from './NavLayout'

export const generated: ComponentStory<typeof NavLayout> = (args) => {
  return <NavLayout {...args} />
}

export default {
  title: 'Layouts/NavLayout',
  component: NavLayout,
} as ComponentMeta<typeof NavLayout>
