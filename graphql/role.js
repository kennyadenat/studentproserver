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
const Role = require('../models/userrole');


const RoleType = new GraphQLObjectType({
  name: 'RoleType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      role: {
        type: GraphQLString
      }
    }
  }
})


const RoleQuery = new GraphQLObjectType({
  name: 'RoleQuery',
  fields: () => {
    return {
      roles: {
        type: new GraphQLList(RoleType),
        resolve: (root, params) => {
          const _role = Role.find().sort('role').exec();
          if (!_role) {
            throw new Error('Error');
          }
          return _role;
        }
      }
    }
  }
})

const RoleMutation = new GraphQLObjectType({
  name: 'RoleMutation',
  fields: () => {
    return {
      addrole: {
        type: RoleType,
        args: {},
        resolve: (root, params) => {

        }
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: RoleQuery,
  mutation: RoleMutation
})