import RecipeCell from 'src/components/RecipeCell'
import SaveToMyRecipesButton from 'src/components/SaveToMyRecipesButton/SaveToMyRecipesButton'
import HeaderLayout from 'src/layouts/HeaderLayout'
import NavLayout from 'src/layouts/NavLayout'

type RecipePageProps = {
  id: string
}

const RecipePage = ({ id }: RecipePageProps) => {
  return (
    <NavLayout>
      <HeaderLayout>
        <div className="mt-5 w-7/12"></div>
        <div className="my-10">
          {/* Button makes mutation on click! */}
          <SaveToMyRecipesButton id={id} />
        </div>
        <RecipeCell id={id} />
      </HeaderLayout>
    </NavLayout>
  )
}

export default RecipePage
