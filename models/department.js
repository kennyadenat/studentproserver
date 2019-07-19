const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const DepartmentSchema = new Schema({
  department: {
    type: String
  }
})

module.exports = mongoose.model('Department', DepartmentSchema)