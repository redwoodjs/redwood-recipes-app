// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof CategoryBubble> = (args) => {
//   return <CategoryBubble {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import CategoryBubble from './CategoryBubble'

export const generated = () => {
  return (
    <CategoryBubble
      name="Vegeterian"
      imageUrl="https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&q=80"
    />
  )
}

export default {
  title: 'Components/CategoryBubble',
  component: CategoryBubble,
} as ComponentMeta<typeof CategoryBubble>
