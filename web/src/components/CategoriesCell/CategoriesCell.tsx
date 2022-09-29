import type { CategoriesQuery } from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import CategoryBubble from '../CategoryBubble/CategoryBubble'
import HorizontalScroller from '../HorizontalScroller/HorizontalScroller'

export const QUERY = gql`
  query CategoriesQuery {
    categories {
      id
      name
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

interface CategoriesCellProps extends CellSuccessProps<CategoriesQuery> {
  onCategorySelected: (categoryId: string) => void
}

export const Success = ({
  categories,
  onCategorySelected,
}: CategoriesCellProps) => {
  return (
    <HorizontalScroller>
      {categories.map((category) => {
        return (
          <CategoryBubble
            key={category.id}
            id={category.id}
            imageUrl={category.imageUrl}
            name={category.name}
            onClick={onCategorySelected}
          />
        )
      })}
    </HorizontalScroller>
  )
}
