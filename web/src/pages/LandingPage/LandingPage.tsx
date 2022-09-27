import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import HeroHeader from 'src/components/HeroHeader'
import { generated as DummyCategorySlider } from 'src/components/HorizontalScroller/HorizontalScroller.stories'
import { generated as DummyRecipe } from 'src/components/RecipeCard/RecipeCard.stories'
import NavLayout from 'src/layouts/NavLayout'

const LandingPage = () => {
  return (
    <NavLayout>
      <MetaTags title="Landing" description="Landing page" />
      <HeroHeader />

      <section className="my-5 flex w-full justify-center md:px-10 lg:px-24">
        <DummyCategorySlider />
      </section>

      <section className="my-4 grid grid-cols-1 gap-8 md:grid-cols-2 md:px-7 lg:grid-cols-3">
        <DummyRecipe />
        <DummyRecipe />
        <DummyRecipe />
        <DummyRecipe />
        <DummyRecipe />
        <DummyRecipe />
        <DummyRecipe />
        <DummyRecipe />
      </section>
    </NavLayout>
  )
}

export default LandingPage
