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
const Caledar = require('../models/calendar');


const CalendareventType = new GraphQLObjectType({
  name: 'CalendareventType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      calendarid: {
        type: GraphQLString
      },
      event: {
        type: GraphQLString
      },
      note: {
        type: GraphQLString
      }
    }
  }
})

const CalendareventInputType = new GraphQLInputObjectType({
  name: 'CalendareventInputType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      calendarid: {
        type: GraphQLString
      },
      event: {
        type: GraphQLString
      },
      note: {
        type: GraphQLString
      }
    }
  }
})

const CalendarauthorType = new GraphQLObjectType({
  name: 'CalendarauthorType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      calendarid: {
        type: GraphQLString
      },
      userid: {
        type: GraphQLString
      },
      avatar: {
        type: GraphQLString
      },
      fullname: {
        type: GraphQLString
      },
      role: {
        type: GraphQLString
      },
      type: {
        type: GraphQLString
      },
      isexist: {
        type: GraphQLBoolean
      }
    }
  }
})

const CalendarauthorInputType = new GraphQLInputObjectType({
  name: 'CalendarauthorInputType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      calendarid: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      },
      userid: {
        type: GraphQLString
      },
      avatar: {
        type: GraphQLString
      },
      fullname: {
        type: GraphQLString
      },
      role: {
        type: GraphQLString
      },
      // type: {
      //   type: GraphQLString
      // },
      isexist: {
        type: GraphQLBoolean
      }
    }
  }
})

const CalendarType = new GraphQLObjectType({
  name: 'CalendarType',
  fields: () => {
    return {
      _id: {
        type: GraphQLString
      },
      title: {
        type: GraphQLString
      },
      institution: {
        type: GraphQLString
      },
      type: {
        type: GraphQLString
      },
      icon: {
        type: GraphQLString
      },
      note: {
        type: GraphQLString
      },
      status: {
        type: GraphQLBoolean
      },
      timezone: {
        type: GraphQLString
      },
      calendarevent: {
        type: GraphQLDate
      },
      calendarauthor: {
        type: new GraphQLList(CalendarauthorType)
      }
    }
  }
})


const CalendarQuery = new GraphQLObjectType({
  name: 'CalendarQuery',
  fields: () => {
    return {
      mycalendar: {
        type: CalendarType,
        args: {},
        resolve: (root, params) => {

        }
      }
    }
  }
})

const CalendarMutation = new GraphQLObjectType({
  name: 'CalendarMutation',
  fields: () => {
    return {
      addcalendar: {
        type: CalendarType,
        args: {
          title: {
            type: GraphQLString
          },
          institution: {
            type: GraphQLString
          },
          type: {
            type: GraphQLString
          },
          icon: {
            type: GraphQLString
          },
          note: {
            type: GraphQLString
          },
          status: {
            type: GraphQLBoolean
          },
          timezone: {
            type: GraphQLString
          },
          calendarevent: {
            type: new GraphQLList(CalendareventInputType)
          },
          calendarauthor: {
            type: new GraphQLList(CalendarauthorInputType)
          }
        },
        resolve: (root, params) => {

          const _calendar = new Caledar({

          })

          //to do . . 

          _calendar.save((err, calendar) => {

          })
        }
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: CalendarQuery,
  mutation: CalendarMutation
})