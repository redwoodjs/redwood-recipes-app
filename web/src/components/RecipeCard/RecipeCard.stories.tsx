// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof RecipeCard> = (args) => {
//   return <RecipeCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import RecipeCard from './RecipeCard'

const exampleRecipe = {
  id: 'pad-thai-recipe-1114',
  name: 'Pad Thai',
  category: 'Weekday dinner',
  imageUrl:
    'https://images.unsplash.com/photo-1637806930600-37fa8892069d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80',
  cuisine: 'Thai',
  blurb: 'A delicious Thai dish that is easy to make at home.',
}

export const generated = () => {
  return (
    <div className="flex columns-3">
      <RecipeCard
        recipe={exampleRecipe}
        onClick={(id) => alert(`Clicked ${id} recipe`)}
      />
    </div>
  )
}

export default {
  title: 'Components/RecipeCard',
  component: RecipeCard,
} as ComponentMeta<typeof RecipeCard>
