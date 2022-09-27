// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof HorizontalScroller> = (args) => {
//   return <HorizontalScroller {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import { generated as Category } from '../CategoryBubble/CategoryBubble.stories'

import HorizontalScroller from './HorizontalScroller'

export const generated = () => {
  return (
    <HorizontalScroller>
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
      <Category />
    </HorizontalScroller>
  )
}

export const insideContainer = () => {
  return (
    <div className="w-1/2">
      <HorizontalScroller>
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </HorizontalScroller>
    </div>
  )
}

export default {
  title: 'Components/HorizontalScroller',
  component: HorizontalScroller,
} as ComponentMeta<typeof HorizontalScroller>
