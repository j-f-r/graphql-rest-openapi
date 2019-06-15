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
};
