var mongoose = require('mongoose');

var CharacterClassSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  speed: Number,
  description: String,
  savingThrows: {
    type: [String],
    default: undefined
  },
  hitDie: String
  
});

//RaceSchema.statics.findOrCreate = require("find-or-create");

module.exports = mongoose.model('CharacterClass', CharacterClassSchema);