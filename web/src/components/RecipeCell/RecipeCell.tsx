import type { FindRecipeQuery, FindRecipeQueryVariables } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Recipe from '../Recipe/Recipe'

export const QUERY = gql`
  query FindRecipeQuery($id: String!) {
    recipe: recipe(id: $id) {
      id
      name
      blurb
      content
      cuisine
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindRecipeQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  recipe,
}: CellSuccessProps<FindRecipeQuery, FindRecipeQueryVariables>) => {
  return <Recipe recipe={recipe} />
}
