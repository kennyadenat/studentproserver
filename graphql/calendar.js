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
const Calendar = require('../models/calendar');
const CalendarAuthor = require('../models/calendarauthor');
const Config = require('../config/key');
const _ = require('underscore');


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
      email: {
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
      code: {
        type: GraphQLString
      },
      public: {
        type: GraphQLString
      },
      private: {
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

const CalendarList = new GraphQLObjectType({
  name: 'CalendarList',
  fields: () => {
    return {
      docs: {
        type: new GraphQLList(CalendarType)
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


const CalendarQuery = new GraphQLObjectType({
  name: 'CalendarQuery',
  fields: () => {
    return {
      calendars: {
        type: CalendarType,
        args: {},
        resolve: (root, params) => {

        }
      },
      calendar: {
        type: CalendarList,
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

          return Calendar.paginate({
            'calendarauthor': {
              $elemMatch: {
                'userid': params.id
              }
            }
          }, options, function (err, resp) {
            if (err) console.log(err);
            return resp;
          });

          // const _calendar = Calendar.find({}).populate({
          //   path: 'calendarauthor',
          //   match: {
          //     userid: '5d3780a6ae52bd4d0cf0284a'
          //   }
          // }).exec();

          // return _calendar;

          // return Calendar.aggregate([{
          //   $unwind: "$calendarauthor.userid"
          // }]).exec((err, cal) => {
          //   console.log(cal);
          //   return cal;
          // });


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

          console.log(params);

          const publicurl = Config.client.dev + '\/pubcal\/';
          const privateurl = Config.client.dev + '\/privcal\/';

          const _calendar = new Calendar({
            title: params.title,
            institution: params.institution,
            type: params.type,
            icon: params.icon,
            note: params.note,
            status: params.status,
            timezone: params.timezone,
            code: radomstring.generate({
              length: 6,
              charset: 'alphabetic'
            }),
            public: publicurl + radomstring.generate({
              length: 39,
              charset: 'alphabetic'
            }),
            private: privateurl + radomstring.generate({
              length: 39,
              charset: 'alphabetic'
            }),
          })


          /* to do
          add calendar id for each entries
          for authors that are non existing, create details and leave their names blanks
          when they create an account, their author profile are automatically updated 
          for those with an account, a notification is being sent to them to accept the invite
          for those without an account, an invite link is being sent: phone: text, email - mail
          */

          _calendar.save((err, calendar) => {
            if (err) console.log(err);
            params.calendarauthor.forEach(element => {
              const author = new CalendarAuthor({
                calendarid: calendar._id,
                userid: element.userid,
                avatar: element.avatar,
                fullname: element.fullname,
                role: element.role,
                isexist: element.isexist,
                email: element.email
              })

              author.save();
              _calendar.calendarauthor.push(author);
            });

            return _calendar.save(function (err, res) {
              return res;
            });

          })

          /*  send notification real time to users..
           for non existent, send an email to join.
           for existent, add to their notifications */

          return _calendar;
        }
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query: CalendarQuery,
  mutation: CalendarMutation
})