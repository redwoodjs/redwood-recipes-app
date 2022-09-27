import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import FlatHeader from 'src/components/FlatHeader/FlatHeader'
import NavLayout from 'src/layouts/NavLayout'

type RecipePageProps = {
  id: string
}

const RecipePage = ({ id }: RecipePageProps) => {
  // @TODO pass to Cell to set title, blurb and image
  const [title, setTitle] = useState(null)
  const [blurb, setBlurb] = useState(null)
  const [image, setImage] = useState(null)

  return (
    <NavLayout>
      <MetaTags title="Recipe" description="Recipe page" />
      <FlatHeader title={title} blurb={blurb} bgUrl={image} />
      <h1>RecipePage</h1>
      <p>
        Find me in <code>./web/src/pages/RecipePage/RecipePage.tsx</code>
      </p>
      <p>
        My default route is named <code>recipe</code>, link to me with `
        <Link to={routes.recipe({ id: '42' })}>Recipe 42</Link>`
      </p>
      <p>The parameter passed to me is {id}</p>
    </NavLayout>
  )
}

export default RecipePage
