import { MetaTags } from '@redwoodjs/web'

import RecipesCell from 'src/components/RecipesCell'
import NavLayout from 'src/layouts/NavLayout'

const MyRecipesPage = () => {
  return (
    <NavLayout>
      <MetaTags title="MyRecipes" description="MyRecipes page" />

      <h1 className="mb-10 text-2xl">Your Saved Recipes</h1>
      <section className="my-4 mb-20 grid grid-cols-1 gap-8 md:grid-cols-2 md:px-7 lg:grid-cols-3">
        <RecipesCell forUser={true} />
      </section>
    </NavLayout>
  )
}

export default MyRecipesPage
