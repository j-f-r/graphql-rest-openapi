const { makeExecutableSchema } = require('graphql-tools');

const typeDefs = require('../graphql/types');
const resolvers = require('../graphql/resolvers');

module.exports = makeExecutableSchema({
    typeDefs,
    resolvers,
});