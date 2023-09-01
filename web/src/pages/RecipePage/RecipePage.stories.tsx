import type { StoryObj, Meta, StoryFn } from '@storybook/react'

import RecipePage from './RecipePage'

export const generated: StoryObj<typeof RecipePage> = {
	render: (args) => {
		return <RecipePage id={'42'} {...args} />
	},
}

export default {
	title: 'Pages/RecipePage',
	component: RecipePage,
} as Meta<typeof RecipePage>
