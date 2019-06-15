const uuidv1 = require('uuid/v1');

const users = [
    {
        id: 1,
        name: 'User A',
    }
]

module.exports = {
    UsersCollection: {
        get(id) {
            const uid = typeof id === 'string' ? parseInt(id, 10) : id;

            return users.find(u => u.id === uid);
        },
        all() {
            return users;
        },
        add(name) {
            const newUser = { id: uuidv1(), name }

            users.push(newUser)
            return newUser;
        }
    }
}
