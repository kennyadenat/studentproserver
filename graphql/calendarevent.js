const GraphQLSchema = require('graphql').GraphQLSchema;
const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLList = require('graphql').GraphQLList;
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLBoolean = require('graphql').GraphQLBoolean;
const GraphQLInt = require('graphql').GraphQLInt;
const GraphQLFloat = require('graphql').GraphQLFloat;
const GraphQLDate = require('graphql-date');
const AuthenticationError = require('apollo-server').AuthenticationError;


const CalendareventType = new GraphQLObjectType({
  name: 'CalendareventType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      calendarid: {
        type: GraphQLString
      },
      event: {
        type: GraphQLString
      },
      note: {
        type: GraphQLString
      }
    }
  }
})

const CalendareventQuery = new GraphQLObjectType({
  name: 'CalendareventQuery',
  fields: () => {
    return {
      events: {
        type: new GraphQLList(CalendareventType),
        args: {},
        resolve: (root, params) => {

        }
      }
    }
  }
})


const CalendareventMutation = new GraphQLObjectType({
  name: 'CalendareventMutation',
  fields: () => {
    return {
      addevents: {
        type: CalendareventType,
        args: {},
        resolve: (root, params) => {

        }
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: CalendareventQuery,
  mutation: CalendareventMutation
})