import EditCategoryCell from 'src/components/Admin/Category/EditCategoryCell'

type CategoryPageProps = {
  id: string
}

const EditCategoryPage = ({ id }: CategoryPageProps) => {
  return <EditCategoryCell id={id} />
}

export default EditCategoryPage
