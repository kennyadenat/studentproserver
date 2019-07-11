const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
  firstname: String,
  lastname: String,
  // This determines the author roles - can they perform CRUD operations
  role: String
}, {
  timestamps: true
})