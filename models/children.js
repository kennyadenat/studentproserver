const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ChildrenSchema = new Schema({
  child: {
    type: String,
    lowercase: true,
    trim: true
  },
  age: String
}, {
  timestamps: true
})


module.exports = mongoose.model('Children', ChildrenSchema);