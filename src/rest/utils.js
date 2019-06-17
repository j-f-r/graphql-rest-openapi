const { graphql } = require('graphql');
const schema = require('../graphql');

const restify = (graphqlEndpoints) => Object.keys(graphqlEndpoints)
    .map(key => [key, (req, res, next) => {
        const variableValues = {
            ...req.body,
            ...req.params
        };
        graphql({
            schema,
            source: graphqlEndpoints[key],
            variableValues
        }).then(graphqlResponse => {
            req.graphqlOperationName = key;
            req.graphqlResponse = graphqlResponse;
            next();
        })
    }]).reduce((map, el) => { return { ...map, [el[0]]: el[1] } }, {})

module.exports = { restify }