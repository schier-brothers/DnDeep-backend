var mongoose = require('mongoose');
//var Race = require('../models/Race')

var CharacterSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  level: {
    type: Number,
    default: 1,
    min: 1,
    max: 20
  },
  proficiencyBonus: {
    type: Number, 
    default: 2,
    min: 2,
    max: 6
  },
  hp: {
    type: Number,
    min: 0
  },
  hpMax: {
    type: Number,
    min: 0
  },
  description: String,
  abilityScores: [
    {type:Number, min:0, max: 20, default: 15},
    {type:Number, min:0, max: 20, default: 14},
    {type:Number, min:0, max: 20, default: 13},
    {type:Number, min:0, max: 20, default: 12},
    {type:Number, min:0, max: 20, default: 10},
    {type:Number, min:0, max: 20, default: 8}
  ],
  race: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Race'//,
//  required: true  
  }, 
  characterClass: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CharacterClass'//,
//  required: true
  }  
});

//CharacterSchema.statics.findOrCreate = require("find-or-create");

module.exports = mongoose.model('Character', CharacterSchema);
