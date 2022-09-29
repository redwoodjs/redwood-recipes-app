interface RecipeCardProps {
  recipe: {
    id: string
    name: string
    category?: string
    imageUrl?: string
    cuisine?: string
    blurb?: string
  }
  onClick?: (id: string) => void
}

const RecipeCard = ({ recipe, onClick }: RecipeCardProps) => {
  return (
    <button
      onClick={() => onClick && onClick(recipe.id)}
      key={recipe.name}
      className="group inset-0 flex max-w-[500px] rounded-lg border border-gray-200 text-left shadow-md transition hover:scale-105 hover:shadow-xl"
    >
      <div className="space-y-4">
        <div className="aspect-w-3 aspect-h-2 ">
          <img
            className="h-48 w-full rounded-t-lg object-cover shadow-lg transition group-hover:rotate-[0.5deg]"
            src={recipe.imageUrl}
            alt={recipe.name}
          />
        </div>
        <section className="px-4">
          <div className="space-y-1 text-lg font-medium leading-6">
            <h3>{recipe.name}</h3>
            <p className="text-sm uppercase text-orange-600">
              {recipe.cuisine}
            </p>
          </div>
          <div className="mb-2">
            <p className="text-gray-500">{recipe.blurb}</p>
          </div>
        </section>
      </div>
    </button>
  )
}

export default RecipeCard
