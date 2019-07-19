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


const DepartmentType = new GraphQLObjectType({
  name: 'DepartmentType',
  fields: () => {
    return {
      _id: GraphQLString,
      department: GraphQLString
    }
  }
})


const DepartmentQuery = new GraphQLObjectType({
  name: 'DepartmentQuery',
  fields: () => {
    return {

    }
  }
})

const DepartmentMutation = new GraphQLObjectType({
  name: 'DepartmentMutation',
  fields: () => {
    return {

    }
  }
})


module.exports = new GraphQLSchema({
  query: DepartmentQuery,
  mutation: DepartmentMutation
})