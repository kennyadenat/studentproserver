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


const CalendarType = new GraphQLObjectType({
  name: 'CalendarType',
  fields: () => {
    return {
      title: GraphQLString,
      institution: GraphQLString,
      type: GraphQLString,
      color: GraphQLString,
      note: GraphQLString,
      status: GraphQLString,
      startdate: GraphQLDate,
      enddate: GraphQLDate,
      timezone: GraphQLDate,
      calendarevent: {
        type: new GraphQLList(analysisType)
      },
      calendarauthor: {
        type: new GraphQLList(analysisType)
      }
    }
  }
})


const CalendarQuery = new GraphQLObjectType({
  name: 'CalendarQuery',
  fields: () => {
    return {

    }
  }
})

const CalendarMutation = new GraphQLObjectType({
  name: 'CalendarMutation',
  fields: () => {
    return {
      addcalendar: {
        type: CalendarType,
        args: {

        },
        resolve: (root, params) => {

        }
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: CalendarQuery,
  mutation: CalendarMutation
})