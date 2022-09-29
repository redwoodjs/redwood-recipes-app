import { MetaTags } from '@redwoodjs/web'

import RecipeCell from 'src/components/RecipeCell'
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
        <div className="mt-5 w-7/12"></div>
        <RecipeCell id={id} />
      </HeaderLayout>
    </NavLayout>
  )
}

export default RecipePage
