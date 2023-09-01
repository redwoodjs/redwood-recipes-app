import type { Meta } from '@storybook/react'

import MyRecipesPage from './MyRecipesPage'

export const generated = () => {
	return <MyRecipesPage />
}

export default {
	title: 'Pages/MyRecipesPage',
	component: MyRecipesPage,
} as Meta<typeof MyRecipesPage>
