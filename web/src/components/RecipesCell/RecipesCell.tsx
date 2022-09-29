import type { RecipesQuery } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import RecipeCard from '../RecipeCard/RecipeCard'

export const QUERY = gql`
  query RecipesQuery {
    recipes {
      id
      name
      blurb
      cuisine
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ recipes }: CellSuccessProps<RecipesQuery>) => {
  const navigateToRecipe = (id: string) => {
    navigate(routes.recipe({ id }))
  }

  return (
    <>
      {recipes.map((item) => {
        return (
          <RecipeCard recipe={item} key={item.id} onClick={navigateToRecipe} />
        )
      })}
    </>
  )
}
