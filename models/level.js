const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LevelSchema = new Schema({
  level: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  }
})

LevelSchema.statics.addlevel = (inst, cb) => {
  Level.findOne({
    level: inst
  }, (err, insts) => {
    if (!insts) {
      const newInst = new Level({
        level: inst
      })
      newInst.save();
    }
  })
}

const Level = module.exports = mongoose.model('Level', LevelSchema)