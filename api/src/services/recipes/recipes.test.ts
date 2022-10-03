import type { Recipe } from '@prisma/client'

import {
  recipes,
  recipe,
  createRecipe,
  updateRecipe,
  deleteRecipe,
} from './recipes'
import type { StandardScenario } from './recipes.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('recipes', () => {
  scenario('returns all recipes', async (scenario: StandardScenario) => {
    const result = await recipes()

    expect(result.length).toEqual(Object.keys(scenario.recipe).length)
  })

  scenario('returns a single recipe', async (scenario: StandardScenario) => {
    const result = await recipe({ id: scenario.recipe.beanSoup.id })

    expect(result).toEqual(scenario.recipe.beanSoup)
  })

  scenario('categoryScenarios', 'returns vegeterial recipes', async () => {
    const result = await recipes({ category: 'vege-1' })

    const [firstResult] = result
    expect(result.length).toEqual(1)

    // @ts-expect-error - QueryResolvers type is wrapped in promise
    expect(firstResult.name).toBe('Pad Thai')
  })

  scenario(
    'categoryScenarios',
    'returns recipes for user1 recipes',
    async () => {
      mockCurrentUser({
        id: 55,
      })

      const result = await recipes({ forUser: true })

      expect(result.length).toEqual(1)
    }
  )

  scenario('creates a recipe', async () => {
    const result = await createRecipe({
      input: { name: 'String', content: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.content).toEqual('String')
  })

  scenario('updates a recipe', async (scenario: StandardScenario) => {
    const original = (await recipe({
      id: scenario.recipe.beanSoup.id,
    })) as Recipe

    // MARK update the beansoup content
    const result = await updateRecipe({
      id: original.id,
      input: { content: 'Bean soup updated content' },
    })

    expect(result.content).toEqual('Bean soup updated content')
  })

  scenario('deletes a recipe', async (scenario: StandardScenario) => {
    const original = (await deleteRecipe({
      id: scenario.recipe.beanSoup.id,
    })) as Recipe
    const result = await recipe({ id: original.id })

    expect(result).toEqual(null)
  })
})
