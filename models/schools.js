const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');
const mongoosepaginator = require('mongoose-paginate-v2');

const SchoolSchema = new Schema({
  school: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
    required: [true, "school cannot be empty"],
  },
  abbrev: {
    type: String
  },
  staffsize: {
    type: String
  },
  studentsize: {
    type: String
  },
  location: {
    type: String
  },
  avatar: {
    type: String
  }
})