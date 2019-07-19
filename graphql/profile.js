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
const Profile = require('../models/profile');


const ProfileType = new GraphQLObjectType({
  name: 'ProfileType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      userid: {
        type: GraphQLString
      },
      title: {
        type: GraphQLString
      },
      identityid: {
        type: GraphQLString
      },
      avatar: {
        type: GraphQLString
      },
      fullname: {
        type: GraphQLString
      },
      institution: {
        type: GraphQLString
      },
      faculty: {
        type: GraphQLString
      },
      department: {
        type: GraphQLString
      },
      level: {
        type: GraphQLString
      },
      phone: {
        type: GraphQLString
      }
    }
  }
})


const ProfileQuery = new GraphQLObjectType({
  name: 'ProfileQuery',
  fields: () => {
    return {

    }
  }
})

const ProfileMutation = new GraphQLObjectType({
  name: 'ProfileMutation',
  fields: () => {
    return {

    }
  }
})


module.exports = new GraphQLSchema({
  query: ProfileQuery,
  mutation: ProfileMutation
})