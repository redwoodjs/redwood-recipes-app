import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import CategoriesCell from 'src/components/CategoriesCell'
import HeroHeader from 'src/components/HeroHeader'
import RecipeCard from 'src/components/RecipeCard'
import RecipesCell from 'src/components/RecipesCell'
import NavLayout from 'src/layouts/NavLayout'
import { useServerData } from 'src/ServerContextProvider'
// import { CustomFormComponent, Form } from 'src/lib/Forms'

const LandingPage = () => {
  const toggleCategory = (catId: string) => {
    if (selectedCategory === catId) {
      setSelectedCategory(null)
    } else {
      setSelectedCategory(catId)
    }
  }

  const data = useServerData()
  // console.log(`👉 \n ~ file: LandingPage.tsx:23 ~ data:`, data)

  const [selectedCategory, setSelectedCategory] = useState<string>(null)

  return (
    <NavLayout>
      {/* <Form></Form> */}
      {/* <MetaTags title="Landing" description="Landing page" /> */}
      <HeroHeader />

      <ul>
        <li>
          <Link to={routes.simple()}>Click to go to Simple</Link>
        </li>
      </ul>

      <section className="my-5 flex w-full justify-center md:px-10 lg:px-24">
        <CategoriesCell onCategorySelected={toggleCategory} />
      </section>

      <section className="my-4 mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 md:px-7 lg:grid-cols-3">
        <RecipesCell category={selectedCategory} />
        {/*
        {data.recipes.map((item) => {
          return <RecipeCard recipe={item} key={item.id} />
        })} */}
      </section>
    </NavLayout>
  )
}

export default LandingPage
