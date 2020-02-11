var mongoose = require('mongoose');
//var Race = require('../models/Race')

var CharacterSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  level: {type: Number, default: 1},
  proficiencyBonus: Number,
  hp: Number,
  hpMax: Number,
  speed: Number,
  description: String,
  abilityScores: {
    type: [Number],
    default:  [15, 14, 13, 12, 10, 8]
  },
  race: {type: mongoose.Schema.Types.ObjectId, ref: 'Race'}, //, required: true},
  class: {type: mongoose.Schema.Types.ObjectId, ref: 'CharacterClass'} //, required: true}
});

//CharacterSchema.statics.findOrCreate = require("find-or-create");

module.exports = mongoose.model('Character', CharacterSchema);