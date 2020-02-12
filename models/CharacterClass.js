var mongoose = require('mongoose');

var CharacterClassSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  description: String,
  savingThrows: {
    type: [{
      type: String,
      enum: ['STR', 'DEX', 'CON', 'INT', 'WIS','CHA']
    }],
    default: null 
  },
  hitDie: {
    type: String,
    enum: ['d4', 'd6', 'd8', 'd10', 'd12']
  }
});

//RaceSchema.statics.findOrCreate = require("find-or-create");

module.exports = mongoose.model('CharacterClass', CharacterClassSchema);
