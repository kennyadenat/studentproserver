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
const CalendarAuthor = require('../models/calendarauthor');


const CalendarauthorType = new GraphQLObjectType({
  name: 'CalendarauthorType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      calendarid: {
        type: GraphQLString
      },
      userid: {
        type: GraphQLString
      },
      avatar: {
        type: GraphQLString
      },
      fullname: {
        type: GraphQLString
      },
      role: {
        type: GraphQLString
      },
      type: {
        type: GraphQLString
      },
      isexist: {
        type: GraphQLBoolean
      }
    }
  }
})


const CalendarauthorQuery = new GraphQLObjectType({
  name: 'CalendarauthorQuery',
  fields: () => {
    return {
      calendarauthor: {
        type: CalendarauthorType,
        args: {},
        resolve: (root, params) => {

        }
      }
    }
  }
})

const CalendarauthorMutation = new GraphQLObjectType({
  name: 'CalendarauthorMutation',
  fields: () => {
    return {
      addauthor: {
        type: CalendarauthorType,
        args: {

        },
        resolve: (root, params) => {

        }
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: CalendarauthorQuery,
  mutation: CalendarauthorMutation
})