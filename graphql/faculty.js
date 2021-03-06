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
const Faculty = require('../models/faculty');


const FacultyType = new GraphQLObjectType({
  name: 'FacultyType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      faculty: {
        type: GraphQLString
      }
    }
  }
})


const FacultyQuery = new GraphQLObjectType({
  name: 'FacultyQuery',
  fields: () => {
    return {
      facultys: {
        type: new GraphQLList(FacultyType),
        resolve: (root, params) => {
          const _fac = Faculty.find().sort('faculty').exec();
          if (!_fac) {
            throw new Error('Error');
          }
          return _fac;
        }
      }
    }
  }
})

const FacultyMutation = new GraphQLObjectType({
  name: 'FacultyMutation',
  fields: () => {
    return {
      addfaculty: {
        type: FacultyType,
        args: {},
        resolve: (root, params) => {

        }
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: FacultyQuery,
  mutation: FacultyMutation
})