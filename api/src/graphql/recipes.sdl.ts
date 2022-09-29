export const schema = gql`
  type Recipe {
    id: String!
    name: String!
    cuisine: String
    createdAt: DateTime!
    content: String!
    imageUrl: String
    blurb: String
  }

  type Query {
    recipes(category: String): [Recipe!]! @requireAuth
    recipe(id: String!): Recipe @requireAuth
  }

  input CreateRecipeInput {
    name: String!
    cuisine: String
    content: String!
    imageUrl: String
    blurb: String
  }

  input UpdateRecipeInput {
    name: String
    cuisine: String
    content: String
    imageUrl: String
    blurb: String
  }

  type Mutation {
    createRecipe(input: CreateRecipeInput!): Recipe! @requireAuth
    updateRecipe(id: String!, input: UpdateRecipeInput!): Recipe! @requireAuth
    deleteRecipe(id: String!): Recipe! @requireAuth
  }
`
