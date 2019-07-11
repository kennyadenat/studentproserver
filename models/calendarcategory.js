const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CalendarcategorySchema = new Schema({
  category: String
})

module.exports = mongoose.model('CalendarCategory', CalendarcategorySchema);