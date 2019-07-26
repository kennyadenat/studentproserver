const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const FacultySchema = new Schema({
  faculty: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  }
})

FacultySchema.statics.addfaculty = (inst, cb) => {
  Faculty.findOne({
    faculty: inst
  }, (err, insts) => {
    if (!insts) {
      const newInst = new Faculty({
        faculty: inst
      })
      newInst.save();
    }
  })
}

const Faculty = module.exports = mongoose.model('Faculty', FacultySchema)