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


const InstitutionType = new GraphQLObjectType({
  name: 'InstitutionType',
  fields: () => {
    return {

    }
  }
})


const InstitutionQuery = new GraphQLObjectType({
  name: 'InstitutionQuery',
  fields: () => {
    return {

    }
  }
})

const InstitutionMutation = new GraphQLObjectType({
  name: 'InstitutionMutation',
  fields: () => {
    return {

    }
  }
})


module.exports = new GraphQLSchema({
  query: InstitutionQuery,
  mutation: InstitutionMutation
})