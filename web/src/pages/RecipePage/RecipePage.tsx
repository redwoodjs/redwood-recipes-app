import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { generated as DummyRecipe } from 'src/components/Recipe/Recipe.stories'
import HeaderLayout from 'src/layouts/HeaderLayout'
import NavLayout from 'src/layouts/NavLayout'

type RecipePageProps = {
  id: string
}

const RecipePage = ({ id }: RecipePageProps) => {
  return (
    <NavLayout>
      <HeaderLayout>
        <MetaTags title="Recipe" description="Recipe page" />
        <div className="mt-5 w-7/12">
          {/* TODO Replace with Cell once we have the API */}
          <DummyRecipe />
          {/* TODO */}
        </div>
      </HeaderLayout>
    </NavLayout>
  )
}

export default RecipePage
