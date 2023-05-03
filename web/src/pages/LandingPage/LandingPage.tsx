import { useState } from 'react'

import type { Recipe } from '@prisma/client'

import { Link, navigate, routes } from '@redwoodjs/router'
import { useServerData } from '@redwoodjs/web/dist/serverContext'

import CategoriesCell from 'src/components/CategoriesCell'
import HeroHeader from 'src/components/HeroHeader'
import RecipeCard from 'src/components/RecipeCard'
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

  const data = useServerData<{ recipes: Recipe[] }>()
  // console.log(`👉 \n ~ file: LandingPage.tsx:23 ~ data:`, data)

  const [selectedCategory, setSelectedCategory] = useState<string>(null)

  const navigateToRecipe = (id: string) => {
    navigate(routes.recipe({ id }))
  }
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
        {/* <RecipesCell category={selectedCategory} /> */}

        {data.recipes.map((item) => {
          return (
            <RecipeCard
              recipe={item}
              key={item.id}
              onClick={navigateToRecipe}
            />
          )
        })}
      </section>
    </NavLayout>
  )
}

export default LandingPage
