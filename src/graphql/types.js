const gql = require('graphql-tag');

module.exports = gql`
  type User {
    id: ID!
    name: String!
  }
  type Query {
    me: User
    user(id: ID!): User
    users: [User!]
  }
  type Mutation {
    createUser(name: String!): User
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;