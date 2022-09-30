import type { EditCategoryById, UpdateCategoryInput } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import CategoryForm from 'src/components/Admin/Category/CategoryForm'

export const QUERY = gql`
  query EditCategoryById($id: String!) {
    category: category(id: $id) {
      id
      name
      imageUrl
    }
  }
`
const UPDATE_CATEGORY_MUTATION = gql`
  mutation UpdateCategoryMutation($id: String!, $input: UpdateCategoryInput!) {
    updateCategory(id: $id, input: $input) {
      id
      name
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error?.message}</div>
)

export const Success = ({ category }: CellSuccessProps<EditCategoryById>) => {
  const [updateCategory, { loading, error }] = useMutation(
    UPDATE_CATEGORY_MUTATION,
    {
      onCompleted: () => {
        toast.success('Category updated')
        navigate(routes.adminCategories())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (
    input: UpdateCategoryInput,
    id: EditCategoryById['category']['id']
  ) => {
    updateCategory({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Category {category?.id}</h2>
      </header>
      <div className="rw-segment-main">
        <CategoryForm category={category} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
