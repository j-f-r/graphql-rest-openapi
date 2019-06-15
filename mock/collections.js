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
    }
}
