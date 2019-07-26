const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LectureroptionSchema = new Schema({
  category: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  }
})

module.exports = mongoose.model('LecturerOption', LectureroptionSchema)