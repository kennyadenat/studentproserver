const GraphQLSchema = require('graphql').GraphQLSchema;
const GraphQLObjectType = require('graphql').GraphQLObjectType;
const GraphQLInputObjectType = require('graphql').GraphQLInputObjectType;
const GraphQLList = require('graphql').GraphQLList;
const GraphQLNonNull = require('graphql').GraphQLNonNull;
const GraphQLString = require('graphql').GraphQLString;
const GraphQLBoolean = require('graphql').GraphQLBoolean;
const GraphQLInt = require('graphql').GraphQLInt;
const GraphQLFloat = require('graphql').GraphQLFloat;
const GraphQLDate = require('graphql-date');
const AuthenticationError = require('apollo-server').AuthenticationError;



const CalendareventroleType = new GraphQLObjectType({
  name: 'CalendareventroleType',
  fields: () => {
    return {
      calendarid: {
        type: GraphQLString
      },
      eventid: {
        type: GraphQLString
      },
      userid: {
        type: GraphQLString
      },
      fullname: {
        type: GraphQLString
      },
      avatar: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      },
      identityid: {
        type: GraphQLString
      },
      role: {
        type: GraphQLString
      }
    }
  }
})

const CalendareventroleInputType = new GraphQLInputObjectType({
  name: 'CalendareventroleInputType',
  fields: () => {
    return {
      calendarid: {
        type: GraphQLString
      },
      eventid: {
        type: GraphQLString
      },
      calendarid: {
        type: GraphQLString
      },
      userid: {
        type: GraphQLString
      },
      fullname: {
        type: GraphQLString
      },
      avatar: {
        type: GraphQLString
      },
      email: {
        type: GraphQLString
      },
      identityid: {
        type: GraphQLString
      },
      role: {
        type: GraphQLString
      }
    }
  }
})

const RuleType = new GraphQLObjectType({
  name: 'RuleType',
  fields: () => {
    return {
      freq: {
        type: GraphQLString
      },
      interval: {
        type: GraphQLString
      },
      dtstart: {
        type: GraphQLString
      },
      until: {
        type: GraphQLString
      },
      count: {
        type: GraphQLString
      },
      wkst: {
        type: GraphQLString
      },
      byweekday: {
        type: GraphQLString
      },
      bymonth: {
        type: GraphQLString
      },
    }
  }
})

const RuleInputType = new GraphQLInputObjectType({
  name: 'RuleInputType',
  fields: () => {
    return {
      freq: {
        type: GraphQLString
      },
      interval: {
        type: GraphQLString
      },
      dtstart: {
        type: GraphQLString
      },
      until: {
        type: GraphQLString
      },
      count: {
        type: GraphQLString
      },
      wkst: {
        type: GraphQLString
      },
      byweekday: {
        type: GraphQLString
      },
      bymonth: {
        type: GraphQLString
      },
    }
  }
})

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
      userid: {
        type: GraphQLString
      },
      start: {
        type: GraphQLDate
      },
      end: {
        type: GraphQLDate
      },
      allDay: {
        type: GraphQLBoolean
      },
      starttime: {
        type: GraphQLDate
      },
      endtime: {
        type: GraphQLDate
      },
      duration: {
        type: GraphQLDate
      },
      backgroundColor: {
        type: GraphQLString
      },
      textColor: {
        type: GraphQLString
      },
      editable: {
        type: GraphQLBoolean
      },
      rrule: {
        type: RuleType
      },
      event: {
        type: GraphQLString
      },
      location: {
        type: GraphQLString
      },
      note: {
        type: GraphQLString
      }
    }
  }
})

const CalendareventQuery = new GraphQLObjectType({
  name: 'CalendareventQuery',
  fields: () => {
    return {
      events: {
        type: new GraphQLList(CalendareventType),
        args: {},
        resolve: (root, params) => {

        }
      },
      event: {
        type: new GraphQLList(CalendareventType),
        args: {},
        resolve: () => {

        }
      }
    }
  }
})

const CalendareventMutation = new GraphQLObjectType({
  name: 'CalendareventMutation',
  fields: () => {
    return {
      addevents: {
        type: CalendareventType,
        args: {
          calendarid: {
            type: GraphQLString
          },
          userid: {
            type: GraphQLString
          },
          start: {
            type: GraphQLDate
          },
          end: {
            type: GraphQLDate
          },
          allDay: {
            type: GraphQLBoolean
          },
          starttime: {
            type: GraphQLDate
          },
          endtime: {
            type: GraphQLDate
          },
          duration: {
            type: GraphQLDate
          },
          backgroundColor: {
            type: GraphQLString
          },
          borderColor: {
            type: GraphQLString
          },
          textColor: {
            type: GraphQLString
          },
          editable: {
            type: GraphQLBoolean
          },
          rrule: {
            type: RuleInputType
          },
          event: {
            type: GraphQLString
          },
          location: {
            type: GraphQLString
          },
          note: {
            type: GraphQLString
          },
          Calendareventrole: {
            type: new GraphQLList(CalendareventroleInputType)
          }
        },
        resolve: (root, params) => {

        }
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: CalendareventQuery,
  mutation: CalendareventMutation
})