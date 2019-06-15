# GraphQL API over REST

## Overview
This repo is about exposing a GraphQL API over REST endpoints. The main package used
to do so, aside from the usual `graphql` packages, is [`sofa`](https://github.com/Urigo/SOFA).

Although `sofa` not a very large project, it presents a straight forward automatic way to
expose GraphQL queries, mutations and subscriptions as traditional RESTful endpoints and, as a 
byproduct, automatically generates [OpenAPI 3.0](https://swagger.io/docs/specification/about/)
documentation for the REST endpoints.

The main reason to expose GraphQL over REST is that projects can levarage the qualities of
GraphQL, and clients that want/are able to interact with the server via GraphQL are able to
do so, while clients that operate under the traditional RESTful ways can keep doing so.

## TODOs

- [ ] Write unit tests
- [ ] Dockerize
- [ ] Write integration tests
- [ ] Connect to a collocated MongoDB