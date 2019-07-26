const bcrypt = require("bcryptjs");
const uniqueValidator = require("mongoose-unique-validator")
const crypto = require("crypto")
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoose_fuzzy_searching = require('mongoose-fuzzy-searching');


// this lists the various schools that exists
const InstitutionSchema = new Schema({
  institution: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  abbrev: String
}, {
  timestamps: true
})

InstitutionSchema.plugin(mongoose_fuzzy_searching, {
  fields: [{
    name: 'institution',
    minSize: 3,
    prefixOnly: true,
  }]
});

InstitutionSchema.statics.addinstitution = (inst, cb) => {
  Institution.findOne({
    institution: inst
  }, (err, insts) => {
    if (!insts) {
      const newInst = new Institution({
        institution: inst
      })
      newInst.save();
    }
  })
}

const Institution = module.exports = mongoose.model('Institution', InstitutionSchema)