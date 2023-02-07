import fs from 'fs'
import path from 'path'

import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

import { hashPassword } from '@redwoodjs/auth-dbauth-api'

export default async () => {
  try {
    const categoryData: Prisma.CategoryCreateArgs['data'][] = [
      {
        name: 'Weekday Dinner',
        id: 'weekday-dinner-1',
        imageUrl:
          'https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      },
      {
        name: 'Vegeterian',
        id: 'vegeterian-1',
        imageUrl:
          'https://images.unsplash.com/photo-1590779033100-9f60a05a013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      },
      {
        name: 'Hearty',
        id: 'hearty-1',
        imageUrl:
          'https://images.unsplash.com/photo-1621964197881-85b7e2ada98a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80',
      },
    ]

    await Promise.all(
      categoryData.map(async (data) => {
        const record = await db.category.create({ data })
        console.log(`Seeded ${record.name}`)
      })
    )

    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`

    const data: Prisma.RecipeCreateArgs['data'][] = [
      {
        name: 'Baba Ganoush',
        blurb:
          'Baba ganoush is a delicious, smoky aubergine dip made by cooking whole aubergines until blackened on the outside and softly steamy on the inside.',
        cuisine: 'Middle Eastern',
        content: fs.readFileSync(
          path.join(__dirname, './recipes/baba-ganoush.md'),
          'utf-8'
        ),
        categoryId: 'vegeterian-1',
        imageUrl:
          'https://images.unsplash.com/photo-1558649332-07f21970d309?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        name: 'Beef Tacos',
        blurb:
          'Assemble your own tacos with a tasty beef filling, salsas and sides. Choose recipes using either crunchy corn shells or wheat tortillas',
        cuisine: 'Mexican',
        content: fs.readFileSync(
          path.join(__dirname, './recipes/beef-tacos.md'),
          'utf-8'
        ),
        categoryId: 'hearty-1',
        imageUrl:
          'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2094&q=80',
      },
      {
        name: 'Carnitas with salsa verde',
        blurb:
          'Carnitas originated in the state of Michoacan of Mexico, and in its most original and authentic form, is pork meat.',
        cuisine: 'Mexican',
        content: fs.readFileSync(
          path.join(__dirname, './recipes/carnitas-with-salsa-verde.md'),
          'utf-8'
        ),
        categoryId: 'hearty-1',
        imageUrl:
          'https://images.unsplash.com/photo-1512427691650-15fcce1dc7b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2Fybml0YXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
      },
      {
        name: 'Chicken Schnitzel',
        blurb: 'Breaded chicken with slaw? We love all that schnitzel!',
        cuisine: 'Austrian',
        content: fs.readFileSync(
          path.join(__dirname, './recipes/chicken-schnitzel.md'),
          'utf-8'
        ),
        categoryId: 'hearty-1',
        imageUrl:
          'https://images.unsplash.com/photo-1585325701956-60dd9c8553bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      },
      {
        name: 'Egg Biriyani',
        blurb:
          'One of the popular biryani recipes in Indian cuisine, in which long-grain fragrant basmati rice is steamed with egg masala, a few herbs, and aromatic biryani spices.',
        cuisine: 'Indian',
        content: fs.readFileSync(
          path.join(__dirname, './recipes/egg-biryani.md'),
          'utf-8'
        ),
        categoryId: 'vegeterian-1',
        imageUrl:
          'https://images.unsplash.com/photo-1630409351217-bc4fa6422075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2138&q=80',
      },
      {
        name: 'Thai Fried Rice',
        blurb:
          'Fried rice with green beans and basil - (Khao Phat). A very simple and delicious dish, it is certainly the most common food in restaurants in Thailand.',
        cuisine: 'Thai',
        content: fs.readFileSync(
          path.join(__dirname, './recipes/thai-fried-rice.md'),
          'utf-8'
        ),
        categoryId: 'weekday-dinner-1',
        imageUrl:
          'https://images.unsplash.com/photo-1578160112054-954a67602b88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8ZnJpZWQlMjByaWNlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
        name: 'Thai Pomelo Salad',
        blurb: `This is a healthy take on the Thai classic makes a light, refreshing meal that’s bursting with flavour.`,
        cuisine: 'Thai',
        content: fs.readFileSync(
          path.join(__dirname, './recipes/thai-pomelo-salad.md'),
          'utf-8'
        ),
        categoryId: 'vegeterian-1',
        imageUrl:
          'https://images.unsplash.com/photo-1590482742964-2c1c0f809b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80',
      },

      {
        name: 'Thin Crust Pizza',
        blurb: `Looking for delicious homemade thin-crust pizza in under an hour? This recipe uses a simple dough made with both baking powder and yeast, which yields a super-thin yet light crust.`,
        cuisine: 'Italian',
        content: fs.readFileSync(
          path.join(__dirname, './recipes/thin-crust-pizza.md'),
          'utf-8'
        ),
        categoryId: 'weekday-dinner-1',
        imageUrl:
          'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBpenphJTIwdGhpbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      },
    ]

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    await Promise.all(
      data.map(async (data) => {
        const record = await db.recipe.create({ data })
        console.log(`Seeded ${record.name}`)
      })
    )

    const users = [
      { email: 'john@example.com', password: 'password1' },
      { email: 'jane@example.com', password: 'password2' },
    ]

    for (const user of users) {
      const [hashedPassword, salt] = hashPassword(user.password)
      await db.user.create({
        data: {
          email: user.email,
          hashedPassword,
          salt,
        },
      })
    }
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
