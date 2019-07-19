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


const FacultyType = new GraphQLObjectType({
  name: 'FacultyType',
  fields: () => {
    return {
      _id: GraphQLString,
      faculty: GraphQLString
    }
  }
})


const FacultyQuery = new GraphQLObjectType({
  name: 'FacultyQuery',
  fields: () => {
    return {

    }
  }
})

const FacultyMutation = new GraphQLObjectType({
  name: 'FacultyMutation',
  fields: () => {
    return {

    }
  }
})


module.exports = new GraphQLSchema({
  query: FacultyQuery,
  mutation: FacultyMutation
})