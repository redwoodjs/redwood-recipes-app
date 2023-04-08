import { db } from 'api/src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  RecipeRelationResolvers,
} from 'types/graphql'

export const recipes: QueryResolvers['recipes'] = ({
  category,
  forUser,
} = {}) => {
  const categoryFilter = category && { category: { id: category } }

  const userFilter = forUser && {
    users: {
      some: {
        id: context.currentUser.id,
      },
    },
  }

  const filters = {
    where: { AND: [categoryFilter, userFilter].filter(Boolean) },
  }

  return db.recipe.findMany(filters)
}

export const recipe: QueryResolvers['recipe'] = ({ id }) => {
  return db.recipe.findUnique({
    where: { id },
  })
}

export const createRecipe: MutationResolvers['createRecipe'] = ({ input }) => {
  return db.recipe.create({
    data: input,
  })
}

export const updateRecipe: MutationResolvers['updateRecipe'] = ({
  id,
  input,
}) => {
  return db.recipe.update({
    data: input,
    where: { id },
  })
}

export const deleteRecipe: MutationResolvers['deleteRecipe'] = ({ id }) => {
  return db.recipe.delete({
    where: { id },
  })
}

export const addToMyRecipes: MutationResolvers['addToMyRecipes'] = ({ id }) => {
  return db.recipe.update({
    data: {
      users: {
        connect: { id: context.currentUser.id },
      },
    },
    where: { id },
  })
}

export const Recipe: RecipeRelationResolvers = {
  category: (_obj, { root }) => {
    return db.recipe.findUnique({ where: { id: root?.id } }).category()
  },
}
