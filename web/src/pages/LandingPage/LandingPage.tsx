import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import CategoriesCell from 'src/components/CategoriesCell'
import HeroHeader from 'src/components/HeroHeader'
import RecipesCell from 'src/components/RecipesCell'
import NavLayout from 'src/layouts/NavLayout'
// import { CustomFormComponent, Form } from 'src/lib/Forms'

const LandingPage = () => {
  const toggleCategory = (catId: string) => {
    if (selectedCategory === catId) {
      setSelectedCategory(null)
    } else {
      setSelectedCategory(catId)
    }
  }

  const [selectedCategory, setSelectedCategory] = useState<string>(null)

  return (
    <NavLayout>
      {/* <Form></Form> */}
      <MetaTags title="Landing" description="Landing page" />
      <HeroHeader />

      <section className="my-5 flex w-full justify-center md:px-10 lg:px-24">
        <CategoriesCell onCategorySelected={toggleCategory} />
      </section>

      <section className="my-4 mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 md:px-7 lg:grid-cols-3">
        <RecipesCell category={selectedCategory} />
      </section>
    </NavLayout>
  )
}

export default LandingPage
