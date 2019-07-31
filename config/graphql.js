exports.GraphQL = function (app, cors) {
  const graphqlHTTP = require('express-graphql');
  const mergeSchemas = require('graphql-tools').mergeSchemas;

  // import all graphiql schemas
  const UserSchema = require('../graphql/user');
  const ProfileSchema = require('../graphql/profile');
  const InstitutionSchema = require('../graphql/institution');
  const DepartmentSchema = require('../graphql/department');
  const FacultySchema = require('../graphql/faculty');
  const LevelSchema = require('../graphql/level');
  const CalendartypeSchema = require('../graphql/calendartype');
  const CalendarSchema = require('../graphql/calendar');
  const CalendarauthorSchema = require('../graphql/calendarauthor');
  const CalendareventSchema = require('../graphql/calendarevent');
  const ParentSchema = require('../graphql/parent');


  const allSchema = mergeSchemas({
    schemas: [
      UserSchema,
      ProfileSchema,
      InstitutionSchema,
      DepartmentSchema,
      FacultySchema,
      LevelSchema,
      CalendartypeSchema,
      CalendarSchema,
      CalendarauthorSchema,
      CalendareventSchema,
      ParentSchema
    ]
  })

  app.use('/api/keeptime', cors(), graphqlHTTP({
    schema: allSchema,
    rootValue: global,
    graphiql: true
  }));
}