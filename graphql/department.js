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
const Department = require('../models/department');


const DepartmentType = new GraphQLObjectType({
  name: 'DepartmentType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      department: {
        type: GraphQLString
      }
    }
  }
})


const DepartmentQuery = new GraphQLObjectType({
  name: 'DepartmentQuery',
  fields: () => {
    return {
      departments: {
        type: new GraphQLList(DepartmentType),
        resolve: (root, params) => {
          const _dept = Department.find().sort('department').exec();
          if (!_dept) {
            throw new Error('Error');
          }
          return _dept;
        }
      }
    }
  }
})

const DepartmentMutation = new GraphQLObjectType({
  name: 'DepartmentMutation',
  fields: () => {
    return {
      adddepartment: {
        type: DepartmentType,
        args: {},
        resolve: (root, params) => {

        }
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: DepartmentQuery,
  mutation: DepartmentMutation
})