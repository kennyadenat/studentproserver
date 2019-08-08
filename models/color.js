const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ColorSchema = new Schema({
  color: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  code: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  textcolor: {
    type: String,
    lowercase: true,
    trim: true
  }
})


module.exports = mongoose.model('Color', ColorSchema);