const sofa = require('sofa-api');
const express = require('express');
const expGraphQL = require('express-graphql');
const { makeExecutableSchema } = require('graphql-tools');
const bodyParser = require('body-parser');


const typeDefs = require('../graphql/types');
const resolvers = require('../graphql/resolvers');

const instantiateApp = (exposeSwagger = null) => {
    const app = express();

    app.use(bodyParser.json());

    const schema = makeExecutableSchema({
        typeDefs,
        resolvers,
    });

    let sofaParams = { schema };
    let openApi = null;

    if (exposeSwagger) {
        openApi = sofa.OpenAPI({
            schema,
            info: {
                title: 'Example API',
                version: '3.0.0',
            },
        });

        sofaParams = {
            schema,
            onRoute(info) {
                openApi.addRoute(info, {
                    basePath: '',
                });
            }
        }
    }

    app.use(
        sofa.useSofa(sofaParams)
    );

    app.use(
        '/graphql',
        expGraphQL({
            schema,
            graphiql: true,
        })
    );

    return [app, openApi]
}

module.exports = {
    server: () => {
        const [app, _] = instantiateApp(false);
        return app
    },
    openApi: () => {
        const [_, openApi] = instantiateApp(true);
        return openApi
    }
}