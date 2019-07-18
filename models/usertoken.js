const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UsertokenSchema = new Schema({
  userid: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'Users'
  },
  token: {
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
    expires: 43200
  }
})

module.exports = mongoose.model('UserToken', UsertokenSchema);