// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof FlatHeader> = (args) => {
//   return <FlatHeader {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import FlatHeader from './FlatHeader'

export const generated = () => {
  return <FlatHeader />
}

export default {
  title: 'Components/FlatHeader',
  component: FlatHeader,
} as ComponentMeta<typeof FlatHeader>
