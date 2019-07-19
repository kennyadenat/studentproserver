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
const User = require('../models/user');


const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    _id: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    fullname: {
      type: GraphQLString
    },
    identityid: {
      type: GraphQLString
    },
    provider: {
      type: GraphQLString
    },
    googleId: {
      type: GraphQLString
    },
    facebookId: {
      type: GraphQLString
    },
    avatar: {
      type: GraphQLString
    },
    token: {
      type: GraphQLString
    },
    hash: {
      type: GraphQLString
    },
    salt: {
      type: GraphQLString
    },
    role: {
      type: GraphQLString
    },
    isVerified: {
      type: GraphQLBoolean
    },
    createdon: {
      type: GraphQLDate
    },
    lastlogin: {
      type: GraphQLDate
    }
  })
});

const UserQuery = new GraphQLObjectType({
  name: 'UserQuery',
  fields: () => {
    return {
      allstudents: {
        type: new GraphQLList(UserType),
        args: {

        },
        resolve: (root, params) => {

        }
      }
    }
  }
})

const UserMutation = new GraphQLObjectType({
  name: 'UserMutation',
  fields: () => {
    return {
      signup: {
        type: UserType,
        args: {
          fullname: {
            type: GraphQLString
          },
          email: {
            type: GraphQLString
          },
          password: {
            type: GraphQLString
          }
        },
        resolve: (root, params) => {
          const proUsers = new User(params);
          const newUsers = proUsers.save((err, user) => {

          })
        }
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: UserQuery,
  mutation: UserMutation
})