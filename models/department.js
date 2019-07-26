const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DepartmentSchema = new Schema({
  department: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  }
})

DepartmentSchema.statics.adddepartment = (inst, cb) => {
  Department.findOne({
    department: inst
  }, (err, insts) => {
    if (!insts) {
      const newInst = new Department({
        department: inst
      })
      newInst.save();
    }
  })
}

const Department = module.exports = mongoose.model('Department', DepartmentSchema)