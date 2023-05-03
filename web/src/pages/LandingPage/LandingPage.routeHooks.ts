import type { MetaHook, ServerDataHook } from '@redwoodjs/web'

// import { db } from '$api/src/lib/db'
import { recipes } from '$api/src/services/recipes/recipes'

export const serverData: ServerDataHook = async () => {
  // console.log('in the landing page server data hook')
  // const out = await db.recipe.findMany()
  // console.log(`👉 \n ~ file: LandingPage.routeHooks.ts:9 ~ out:`, out)
  const out = await recipes()

  // const out = await cacheQuery(QUERY, { id: queryParams.recipeId})

  return {
    recipes: out,
  }
}

export const meta: MetaHook = async ({ serverData }) => {
  return [
    {
      title: 'Bazinga',
    },
  ]
}
