const { graphql } = require('graphql');
const schema = require('../graphql');


const me = (req, res, next) => {
    graphql(schema, `
    { 
        me { 
            id
            name 
        }
    }`).then((graphqlResponse) => {
        req.graphqlOperationName = 'me';
        req.graphqlResponse = graphqlResponse;
        next();
    })
}

const users = (req, res, next) => {
    graphql(schema, `
    { 
        users { 
            id
            name 
        }
    }`).then((graphqlResponse) => {
        req.graphqlOperationName = 'users';
        req.graphqlResponse = graphqlResponse;
        next();
    })
}

const user = (req, res, next) => {
    graphql(schema, `
    { 
        user(id: ${req.params.id}) { 
            id
            name 
        }
    }`).then((graphqlResponse) => {
        req.graphqlOperationName = 'user';
        req.graphqlResponse = graphqlResponse;
        next();
    })
}

const createUser = (req, res, next) => {
    graphql({
        schema, source: `
    mutation CreateUser($name: String!) { 
        createUser(name: $name) {
            id
            name
        } 
    }`,
        variableValues: req.body
    }).then((graphqlResponse) => {
        console.log('Responded', graphqlResponse)
        req.graphqlOperationName = 'createUser';
        req.graphqlResponse = graphqlResponse;
        next();
    })
}

module.exports = {
    me,
    users,
    user,
    createUser
}