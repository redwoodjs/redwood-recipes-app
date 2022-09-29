export const schema = gql`
  type Category {
    id: String!
    name: String!
    imageUrl: String
    recipes: [Recipe]!
  }

  type Query {
    categories: [Category!]! @skipAuth
    category(id: String!): Category @requireAuth
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
    createCategory(input: CreateCategoryInput!): Category! @requireAuth
    updateCategory(id: String!, input: UpdateCategoryInput!): Category!
      @requireAuth
    deleteCategory(id: String!): Category! @requireAuth
  }
`
