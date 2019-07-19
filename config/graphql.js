exports.GraphQL = function (app, cors) {
  const graphqlHTTP = require('express-graphql');
  const mergeSchemas = require('graphql-tools').mergeSchemas;

  // import all graphiql schemas
  const UserSchema = require('../graphql/user');

  const allSchema = mergeSchemas({
    schemas: [
      UserSchema
    ]
  })

  app.use('/api/keeptime', cors(), graphqlHTTP({
    schema: allSchema,
    rootValue: global,
    graphiql: true
  }));
}