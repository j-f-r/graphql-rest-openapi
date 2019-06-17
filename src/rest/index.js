const express = require('express');
const router = express.Router();

const usersEndpoints = require('./users');
const parseGraphQLResponse = (req, res, next) => {
    const { graphqlResponse, graphqlOperationName } = req;
    if (graphqlResponse.data) {
        console.log(graphqlOperationName, graphqlResponse, graphqlResponse.data[graphqlOperationName])
        res.send(graphqlResponse.data[graphqlOperationName]);
    }
}


router.get('/users/me', [usersEndpoints.me, parseGraphQLResponse]);
router.get('/users/users', [usersEndpoints.users, parseGraphQLResponse]);
router.get('/users/users/:id', [usersEndpoints.user, parseGraphQLResponse]);
router.post('/users/create-user', [usersEndpoints.createUser, parseGraphQLResponse]);

module.exports = router