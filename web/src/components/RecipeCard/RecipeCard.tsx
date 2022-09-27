interface RecipeCardProps {
  recipe: {
    name: string
    category: string
    imageUrl: string
    cuisine: string
    blurb: string
  }
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div
      key={recipe.name}
      className="group inset-0 flex rounded-lg border border-gray-200 shadow-md transition hover:scale-105 hover:shadow-xl"
    >
      <div className="space-y-4">
        <div className="aspect-w-3 aspect-h-2">
          <img
            className="h-48 w-full rounded-t-lg object-cover shadow-lg transition group-hover:rotate-[0.5deg]"
            src={recipe.imageUrl}
            alt={recipe.name}
          />
        </div>
        <section className="px-4">
          <div className="space-y-1 text-lg font-medium leading-6">
            <h3>{recipe.name}</h3>
            <p className="text-sm uppercase text-indigo-600">
              {recipe.category}
            </p>
          </div>
          <div className="mb-2">
            <p className="text-gray-500">{recipe.blurb}</p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default RecipeCard
