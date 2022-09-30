export const schema = gql`
  type Category {
    id: String!
    name: String!
    imageUrl: String
    recipes: [Recipe]!
  }

  type Query {
    categories: [Category!]! @skipAuth
    category(id: String!): Category @skipAuth
  }

  input CreateCategoryInput {
    name: String!
    imageUrl: String
  }

  input UpdateCategoryInput {
    name: String
    imageUrl: String
  }

  type Mutation {
    createCategory(input: CreateCategoryInput!): Category!
      @requireAuth(roles: ["ADMIN"])
    updateCategory(id: String!, input: UpdateCategoryInput!): Category!
      @requireAuth(roles: ["ADMIN"])
    deleteCategory(id: String!): Category! @requireAuth(roles: ["ADMIN"])
  }
`
