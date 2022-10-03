import { Prisma, Recipe } from '@prisma/client'

import type { ScenarioData } from '@redwoodjs/testing/api'

export const standard = defineScenario<Prisma.RecipeCreateArgs>({
  recipe: {
    beanSoup: { data: { name: 'Bean Soup', blurb: 'bean soup', content: '' } },
    burgers: {
      data: {
        name: 'Juicy Burger',
        content: 'The best burgers you have ever had',
        blurb: 'Tasty burgers!',
      },
    },
  },
})

const vegeCategory: Prisma.CategoryCreateArgs['data'] = {
  name: 'Vegetarian',
  id: 'vege-1',
}

const mockUser: Prisma.UserCreateArgs['data'] = {
  id: 55,
  email: 'hello@bazinga.com',
  roles: 'USER',
  hashedPassword: '',
  salt: '',
}

export const categoryScenarios = defineScenario<Prisma.RecipeCreateArgs>({
  recipe: {
    padThai: {
      data: {
        name: 'Pad Thai',
        content: 'The best pad thai you have ever had',
        blurb: 'Tasty pad thai!',
        category: {
          create: vegeCategory,
        },
      },
    },
    beanSoup: {
      data: {
        name: 'Bean Soup',
        blurb: 'bean soup',
        content: '',
        users: {
          create: mockUser,
        },
      },
    },
  },
})

export type StandardScenario = ScenarioData<
  Recipe,
  'recipe',
  'beanSoup' | 'burgers'
>

export type CategoryScenario = ScenarioData<Recipe, 'recipe', 'padThai'>
