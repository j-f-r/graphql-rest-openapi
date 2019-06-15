const { UsersCollection } = require('../../mock/collections');

module.exports = {
    Query: {
        me() {
            return UsersCollection.get(1);
        },
        user(_, { id }) {
            return UsersCollection.get(id);
        },
        users() {
            return UsersCollection.all();
        },
    },
    Mutation: {
        createUser(_, { name }) {
            const user = UsersCollection.add(name);
            return user;
        },
    },
};
