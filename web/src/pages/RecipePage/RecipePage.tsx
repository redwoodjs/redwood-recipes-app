import { useState } from 'react'

import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import FlatHeader from 'src/components/FlatHeader/FlatHeader'
import Recipe from 'src/components/Recipe/Recipe'
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
      <div className="mt-5 w-7/12">
        <Recipe />
      </div>
    </NavLayout>
  )
}

export default RecipePage
