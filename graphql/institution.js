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
const Institutions = require('../models/institution');


const InstitutionType = new GraphQLObjectType({
  name: 'InstitutionType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      institution: {
        type: GraphQLString
      },
      abbrev: {
        type: GraphQLString
      }
    }
  }
})


const InstitutionQuery = new GraphQLObjectType({
  name: 'InstitutionQuery',
  fields: () => {
    return {
      institutions: {
        type: new GraphQLList(InstitutionType),
        args: {},
        resolve: (root, params) => {
          const _inst = Institutions.find().sort('institution').exec();
          if (!_inst) {
            throw new Error('Error');
          }
          return _inst;
        }
      },
      searchinstitution: {
        type: new GraphQLList(InstitutionType),
        args: {
          search: {
            type: GraphQLString
          }
        },
        resolve: (root, params) => {
          Institutions.find().exec((err, res) => {
            console.log(res);
          })

        }
      }
    }
  }
})


const InstitutionMutation = new GraphQLObjectType({
  name: 'InstitutionMutation',
  fields: () => {
    return {
      addinstitution: {
        type: InstitutionType,
        args: {},
        resolve: () => {

        }
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: InstitutionQuery,
  mutation: InstitutionMutation
})