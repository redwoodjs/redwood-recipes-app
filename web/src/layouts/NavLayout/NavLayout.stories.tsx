import type { StoryObj, Meta, StoryFn } from '@storybook/react'

import NavLayout from './NavLayout'

export const generated: StoryObj<typeof NavLayout> = {
	render: (args) => {
		return <NavLayout {...args} />
	},
}

export default {
	title: 'Layouts/NavLayout',
	component: NavLayout,
} as Meta<typeof NavLayout>
