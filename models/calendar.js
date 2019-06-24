const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CalendarSchema = new Schema({
  id: {
    type: String
  },
  name: {
    type: String
  }
})