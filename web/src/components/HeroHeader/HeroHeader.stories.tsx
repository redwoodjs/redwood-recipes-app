// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof HeroHeader> = (args) => {
//   return <HeroHeader {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import HeroHeader from './HeroHeader'

export const generated = () => {
	return <HeroHeader />
}

export default {
	title: 'Components/HeroHeader',
	component: HeroHeader,
} as Meta<typeof HeroHeader>
