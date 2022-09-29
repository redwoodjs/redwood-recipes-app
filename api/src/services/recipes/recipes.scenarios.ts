import type { Prisma, Recipe } from '@prisma/client'
import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RecipeCreateArgs>({
  recipe: {
    one: { data: { name: 'String', content: 'String' } },
    two: { data: { name: 'String', content: 'String' } },
  },
})

export type StandardScenario = ScenarioData<Recipe, 'recipe'>
