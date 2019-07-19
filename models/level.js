const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LevelSchema = new Schema({
  level: {
    type: String
  }
})

module.exports = mongoose.model('Level', LevelSchema)