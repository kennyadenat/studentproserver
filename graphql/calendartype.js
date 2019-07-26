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
const Calendartype = require('../models/calendartype');

const CalendartypeType = new GraphQLObjectType({
  name: 'CalendartypeType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      type: {
        type: GraphQLString
      },
      icon: {
        type: GraphQLString
      },
      description: {
        type: GraphQLString
      }
    }
  }
})


const CalendartypeQuery = new GraphQLObjectType({
  name: 'CalendartypeQuery',
  fields: () => {
    return {
      calendartypes: {
        type: new GraphQLList(CalendartypeType),
        resolve: (root, params) => {
          const _types = Calendartype.find().exec();
          if (!_types) {
            throw new Error('Error');
          }
          return _types;
        }
      }
    }
  }
})

const CalendartypeMutation = new GraphQLObjectType({
  name: 'CalendartypeMutation',
  fields: () => {
    return {
      addcalendartype: {
        type: CalendartypeType,
        resolve: (root, params) => {

        }
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: CalendartypeQuery,
  mutation: CalendartypeMutation
})