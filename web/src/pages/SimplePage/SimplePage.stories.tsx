import type { ComponentMeta } from '@storybook/react'

import SimplePage from './SimplePage'

export const generated = () => {
  return <SimplePage />
}

export default {
  title: 'Pages/SimplePage',
  component: SimplePage,
} as ComponentMeta<typeof SimplePage>
