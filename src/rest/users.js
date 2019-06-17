const { graphql } = require('graphql');
const schema = require('../graphql');


const me = (req, res) => {
    graphql(schema, '{ me { name }}').then((gqlRes) => {
        res.send(gqlRes)
    })
}

module.exports = {
    me
}