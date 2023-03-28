// import { db } from '$api/src/lib/db'
// import { recipes } from '$api/src/services/recipes/recipes'

export const serverData = async () => {
  console.log('in the landing page server data hook')
  // const out = await db.recipe.findMany()
  // const out = await recipes()

  // const out = await cacheQuery(QUERY, { id: queryParams.recipeId})

  return {
    recipes: {},
  }
}
