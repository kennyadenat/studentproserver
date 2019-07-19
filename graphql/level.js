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


const LevelType = new GraphQLObjectType({
  name: 'LevelType',
  fields: () => {
    return {
      _id: GraphQLString,
      level: GraphQLString
    }
  }
})


const LevelQuery = new GraphQLObjectType({
  name: 'LevelQuery',
  fields: () => {
    return {

    }
  }
})

const LevelMutation = new GraphQLObjectType({
  name: 'LevelMutation',
  fields: () => {
    return {

    }
  }
})


module.exports = new GraphQLSchema({
  query: LevelQuery,
  mutation: LevelMutation
})