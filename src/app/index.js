const express = require('express');
const expGraphQL = require('express-graphql');
const bodyParser = require('body-parser');


const schema = require('../graphql');
const api = require('../rest');

const app = express();

app.use(bodyParser.json());

app.use(
    '/graphql',
    expGraphQL({
        schema,
        graphiql: true,
    })
);

app.use(
    '/api',
    api
);

module.exports = app