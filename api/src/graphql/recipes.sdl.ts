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
    recipes(category: String): [Recipe!]! @skipAuth
    recipe(id: String!): Recipe @skipAuth
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
    addToMyRecipes(id: String!): Recipe! @requireAuth
    # Admin mutations 👇
    createRecipe(input: CreateRecipeInput!): Recipe!
      @requireAuth(roles: "ADMIN")
    updateRecipe(id: String!, input: UpdateRecipeInput!): Recipe!
      @requireAuth(roles: "ADMIN")
    deleteRecipe(id: String!): Recipe! @requireAuth(roles: "ADMIN")
  }
`
