const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const VenueSchema = new Schema({
  venue: Boolean,
  color: String,
  description: String
}, {
  timestamps: true
})

module.exports = mongoose.model('Venue', VenueSchema);