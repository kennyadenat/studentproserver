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
      },
      title: {
        type: GraphQLString
      },
      note: {
        type: GraphQLString
      },
      status: {
        type: GraphQLBoolean
      },
      timezone: {
        type: GraphQLString
      }
    }
  }
})

const CalendarauthorList = new GraphQLObjectType({
  name: 'CalendarauthorList',
  fields: () => {
    return {
      docs: {
        type: new GraphQLList(CalendarauthorType)
      },
      totalDocs: {
        type: GraphQLString
      },
      limit: {
        type: GraphQLString
      },
      page: {
        type: GraphQLString
      },
      totalPages: {
        type: GraphQLString
      },
      hasNextPage: {
        type: GraphQLBoolean
      },
      nextPage: {
        type: GraphQLString
      },
      hasPrevPage: {
        type: GraphQLBoolean
      },
      prevPage: {
        type: GraphQLString
      },
      pagingCounter: {
        type: GraphQLString
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