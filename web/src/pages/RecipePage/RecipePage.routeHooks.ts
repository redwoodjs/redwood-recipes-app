import type { Recipe } from '@prisma/client'

import { MetaHook, ServerDataHook } from '@redwoodjs/web'

import { db } from '$api/src/lib/db'
import { recipe } from '$api/src/services/recipes/recipes'

export const serverData: ServerDataHook = async ({ params }) => {
  // e.g. 1 Using db
  // return db.recipe.findUnique({
  //   where: {
  //     id: params.id,
  //   },
  // })

  // e.g. 2 Using a service
  return recipe({
    id: params.id,
  })
}

export const meta: MetaHook<Recipe> = async ({ serverData }) => {
  return [
    {
      title: serverData.name,
    },
    {
      name: 'description',
      content: serverData.blurb,
    },
    {
      property: 'og:image',
      content: serverData.imageUrl,
    },
  ]
}
