import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import HeroHeader from 'src/components/HeroHeader'
import { generated as DummyCategories } from 'src/components/HorizontalScroller/HorizontalScroller.stories'
import { generated as DummyRecipes } from 'src/components/RecipeCard/RecipeCard.stories'
import NavLayout from 'src/layouts/NavLayout'

const LandingPage = () => {
  return (
    <NavLayout>
      <MetaTags title="Landing" description="Landing page" />
      <HeroHeader />

      <section className="my-5 flex w-full justify-center md:px-10 lg:px-24">
        <DummyCategories />
      </section>

      <section className="my-4 columns-1 gap-8 space-y-8 md:columns-2 lg:columns-3">
        <DummyRecipes />
        <DummyRecipes />
        <DummyRecipes />
        <DummyRecipes />
        <DummyRecipes />
        <DummyRecipes />
        <DummyRecipes />
        <DummyRecipes />
      </section>
    </NavLayout>
  )
}

export default LandingPage
