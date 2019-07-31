const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Children = require('./children');
const mongoosepaginator = require('mongoose-paginate-v2');


const ParentSchema = new Schema({
  parent: {
    type: String,
    lowercase: true,
    trim: true
  },
  children: [Children.schema],
  abbrev: String
}, {
  timestamps: true
})

ParentSchema.plugin(mongoosepaginator);
module.exports = mongoose.model('Parent', ParentSchema)