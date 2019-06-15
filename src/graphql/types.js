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
  schema {
    query: Query
  }
`;