const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RuleSchema = new Schema({
  freq: {
    type: String,
    default: ''
  },
  interval: {
    type: Number
  },
  dtstart: {
    type: Date
  },
  until: {
    type: Date
  },
  count: {
    type: Number,
    default: 30
  },
  wkst: {
    type: String,
    default: ''
  },
  byweekday: [{
    week: String
  }],
  bymonth: [{
    month: String
  }]
})

module.exports = mongoose.model('Rule', RuleSchema);