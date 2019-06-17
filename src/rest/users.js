const { restify } = require('./utils');

const endpoints = {
    me: `
    { 
        me { 
            id
            name 
        }
    }`,
    users: `
    { 
        users { 
            id
            name 
        }
    }`,
    user: `
    query FindUser($id: ID!) { 
        user(id: $id) { 
            id
            name 
        }
    }`,
    createUser: `
    mutation CreateUser($name: String!) { 
        createUser(name: $name) {
            id
            name
        } 
    }`
}

module.exports = restify(endpoints)