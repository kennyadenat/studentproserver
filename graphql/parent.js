const mongoose = require('mongoose');
const GraphQLSchema = require('graphql').GraphQLSchema;
const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLList = require('graphql').GraphQLList;
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLInputObjectType = require('graphql').GraphQLInputObjectType;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLBoolean = require('graphql').GraphQLBoolean;
const GraphQLInt = require('graphql').GraphQLInt;
const GraphQLFloat = require('graphql').GraphQLFloat;
const GraphQLDate = require('graphql-date');
const AuthenticationError = require('apollo-server').AuthenticationError;
const radomstring = require('randomstring');
const Config = require('../config/key');
const _ = require('underscore');
const Parent = require('../models/parent');



const ChildrenType = new GraphQLObjectType({
  name: 'ChildrenType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      child: {
        type: GraphQLString
      },
      age: {
        type: GraphQLString
      }
    }
  }
})

const ChildrenInputType = new GraphQLInputObjectType({
  name: 'ChildrenInputType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      child: {
        type: GraphQLString
      },
      age: {
        type: GraphQLString
      }
    }
  }
})

const ParentType = new GraphQLObjectType({
  name: 'ParentType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      parent: {
        type: GraphQLString
      },
      abbrev: {
        type: GraphQLString
      },
      children: {
        type: new GraphQLList(ChildrenType)
      }
    }
  }
})


const ParentList = new GraphQLObjectType({
  name: 'ParentList',
  fields: () => {
    return {
      docs: {
        type: new GraphQLList(ParentType)
      },
      totalDocs: {
        type: GraphQLString
      },
      limit: {
        type: GraphQLString
      },
      page: {
        type: GraphQLString
      },
      totalPages: {
        type: GraphQLString
      },
      hasNextPage: {
        type: GraphQLBoolean
      },
      nextPage: {
        type: GraphQLString
      },
      hasPrevPage: {
        type: GraphQLBoolean
      },
      prevPage: {
        type: GraphQLString
      },
      pagingCounter: {
        type: GraphQLString
      }
    }
  }
})

const ParentQuery = new GraphQLObjectType({
  name: 'ParentQuery',
  fields: () => {
    return {
      parents: {
        type: ParentType,
        args: {},
        resolve: (root, params) => {

        }
      },
      parent: {
        type: ParentList,
        args: {
          id: {
            type: GraphQLString
          },
          limit: {
            type: GraphQLInt
          },
          page: {
            type: GraphQLInt
          },
          search: {
            type: GraphQLString
          }
        },
        resolve: (root, params) => {
          const options = {
            page: 1,
            limit: 20
          };

          // Calendar.aggregate({

          // })



          return Parent.paginate({
            'children': {
              $elemMatch: {
                'child': 'tolu'
              }
            }
          }, options, function (err, resp) {
            if (err) console.log(err);
            console.log(resp);
            return resp;
          });
          // const _calendar = Calendar.find({}).populate({
          //   path: 'calendarauthor',
          //   match: {
          //     userid: '5d3780a6ae52bd4d0cf0284a'
          //   }
          // }).exec();

          // return _calendar;

          // const cal = CalendarAuthor.find({
          //   userid: '5d3780a6ae52bd4d0cf0284a'
          // }).exec((err, res) => {
          //   console.log(res);
          // })

          // return Parent.aggregate([{
          //   $unwind: "$children.age"
          // }]).exec((err, cal) => {
          //   console.log(cal);
          //   return cal;
          // });

          // return Parent.find({
          //   'children': {
          //     $elemMatch: {
          //       'child': 'tolu'
          //     }
          //   }
          // }, (err, result) => {
          //   console.log(result);
          //   return result;
          // });

        }
      }
    }
  }
})


const ParentMutation = new GraphQLObjectType({
  name: 'ParentMutation',
  fields: () => {
    return {
      addparent: {
        type: ParentType,
        args: {
          parent: {
            type: GraphQLString
          },
          abbrev: {
            type: GraphQLString
          },
          children: {
            type: new GraphQLList(ChildrenInputType)
          }
        },
        resolve: (root, params) => {
          console.log(params);
          const _parent = new Parent(params);
          _parent.save((err) => {
            console.log(err);
          })

        }
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: ParentQuery,
  mutation: ParentMutation
})