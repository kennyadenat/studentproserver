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


const CalendartypeType = new GraphQLObjectType({
  name: 'CalendarType',
  fields: () => {
    return {

    }
  }
})


const CalendartypeQuery = new GraphQLObjectType({
  name: 'CalendartypeQuery',
  fields: () => {
    return {

    }
  }
})

const CalendartypeMutation = new GraphQLObjectType({
  name: 'CalendartypeMutation',
  fields: () => {
    return {

    }
  }
})


module.exports = new GraphQLSchema({
  query: CalendartypeQuery,
  mutation: CalendartypeMutation
})