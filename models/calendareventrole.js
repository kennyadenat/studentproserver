const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');


const CalendareventroleSchema = new Schema({
  calendarid: {
    type: Schema.Types.ObjectId
  },
  eventid: {
    type: Schema.Types.ObjectId
  },
  userid: {
    type: String
  },
  fullname: {
    type: String,
    lowercase: true,
    trim: true
  },
  avatar: {
    type: String
  },
  email: {
    type: String,
    lowercase: true,
    trim: true
  },
  identityid: {
    type: String,
    lowercase: true,
    trim: true
  },
  role: {
    type: String,
    lowercase: true,
    trim: true
  },  
}, {
  timestamps: true
})


CalendareventroleSchema.plugin(mongoose_fuzzy_searching, {
  fields: [{
    name: 'email',
    minSize: 3,
    prefixOnly: true,
  }, {
    name: 'fullname',
    minSize: 3,
    prefixOnly: true,
  }, {
    name: 'identityid',
    minSize: 3,
    prefixOnly: true,
  }]
});


module.exports = mongoose.model('CalendarEventrole', CalendareventroleSchema)