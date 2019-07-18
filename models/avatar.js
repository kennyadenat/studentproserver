const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AvatarSchema = new Schema({
  avatar: {
    type: String,
    unique: true,
    lowercase: true,
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('Avatar', AvatarSchema);