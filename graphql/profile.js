const GraphQLSchema = require('graphql').GraphQLSchema;
const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLList = require('graphql').GraphQLList;
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLInputObjectType = require('graphql').GraphQLInputObjectType;
const GraphQLBoolean = require('graphql').GraphQLBoolean;
const GraphQLInt = require('graphql').GraphQLInt;
const GraphQLFloat = require('graphql').GraphQLFloat;
const GraphQLDate = require('graphql-date');
const AuthenticationError = require('apollo-server').AuthenticationError;
const Profile = require('../models/profile');
const Institution = require('../models/institution');



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
      email: {
        type: GraphQLString
      },
      role: {
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
      allprofile: {
        type: new GraphQLList(ProfileType),
        args: {},
        resolve: (root, params) => {
          const _profile = Profile.find().exec();
          return _profile;
        }
      },
      profile: {
        type: ProfileType,
        args: {
          id: {
            type: GraphQLNonNull(GraphQLString)
          }
        },
        resolve: (root, params) => {
          return Profile.findOne({
            userid: params.id
          }, (err) => {
            if (err) throw new Error(err);
          })
        }
      },
      searchprofile: {
        type: new GraphQLList(ProfileType),
        args: {
          search: {
            type: GraphQLString
          }
        },
        resolve: (root, params) => {

          return Profile.fuzzySearch({
            query: params.search,
            prefixOnly: true,
            minSize: 4
          }, (err, profile) => {
            if (err) throw new Error(err);
            return profile;
          })
        }
      }
    }
  }
})

const ProfileMutation = new GraphQLObjectType({
  name: 'ProfileMutation',
  fields: () => {
    return {
      updateprofile: {
        type: ProfileType,
        args: {
          _id: {
            type: GraphQLNonNull(GraphQLString)
          },
          userid: {
            type: GraphQLNonNull(GraphQLString)
          },
          email: {
            type: GraphQLNonNull(GraphQLString)
          },
          title: {
            type: GraphQLString
          },
          role: {
            type: GraphQLString
          },
          identityid: {
            type: GraphQLString
          },
          avatar: {
            type: GraphQLString
          },
          fullname: {
            type: GraphQLNonNull(GraphQLString)
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
        },
        resolve: (root, params) => {

          Profile.findOneAndUpdate({
            _id: params._id
          }, {
            role: params.role,
            title: params.title,
            identityid: params.identityid,
            avatar: params.avatar,
            fullname: params.fullname,
            institution: params.institution,
            faculty: params.faculty,
            department: params.department,
            level: params.level,
            phone: params.phone,
          }, (err, user) => {
            if (err) throw new Error(err);
            if (user) {
              Institution.addinstitution(params.institution, function (err) {
                throw new Error(err);
              });
            }
          })
        }
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: ProfileQuery,
  mutation: ProfileMutation
})