import type { FindCategoryById } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import Category from 'src/components/Admin/Category/Category'

export const QUERY = gql`
  query FindCategoryById($id: String!) {
    category: category(id: $id) {
      id
      name
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Category not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ category }: CellSuccessProps<FindCategoryById>) => {
  return <Category category={category} />
}
