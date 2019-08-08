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
const Color = require('../models/color');


const ColorType = new GraphQLObjectType({
  name: 'ColorType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      color: {
        type: GraphQLString
      },
      code: {
        type: GraphQLString
      },
      textcolor: {
        type: GraphQLString
      }
    }
  }
})


const ColorQuery = new GraphQLObjectType({
  name: 'ColorQuery',
  fields: () => {
    return {
      colors: {
        type: new GraphQLList(ColorType),
        resolve: (root, params) => {
          const _color = Color.find().sort('color').exec();
          if (!_color) {
            throw new Error('Error');
          }
          return _color;
        }
      }
    }
  }
})

const ColorMutation = new GraphQLObjectType({
  name: 'ColorMutation',
  fields: () => {
    return {
      addcolor: {
        type: ColorType,
        args: {},
        resolve: (root, params) => {

        }
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: ColorQuery,
  mutation: ColorMutation
})