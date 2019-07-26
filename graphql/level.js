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
const Level = require('../models/level');


const LevelType = new GraphQLObjectType({
  name: 'LevelType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      level: {
        type: GraphQLString
      }
    }
  }
})


const LevelQuery = new GraphQLObjectType({
  name: 'LevelQuery',
  fields: () => {
    return {
      levels: {
        type: new GraphQLList(LevelType),
        resolve: (root, params) => {
          const _lev = Level.find().sort('level').exec();
          if (!_lev) {
            throw new Error('Error');
          }
          return _lev;
        }
      }
    }
  }
})

const LevelMutation = new GraphQLObjectType({
  name: 'LevelMutation',
  fields: () => {
    return {
      addlevel: {
        type: LevelType,
        args: {},
        resolve: () => {

        }
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: LevelQuery,
  mutation: LevelMutation
})