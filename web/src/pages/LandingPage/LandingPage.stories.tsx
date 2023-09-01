import type { Meta } from '@storybook/react'

import LandingPage from './LandingPage'

export const generated = () => {
	return <LandingPage />
}

export default {
	title: 'Pages/LandingPage',
	component: LandingPage,
} as Meta<typeof LandingPage>
