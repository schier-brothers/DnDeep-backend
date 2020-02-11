var mongoose = require('mongoose');

var RaceSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  speed: Number,
  description: String,
  abilityScoreModifires: {
    type: [Number],
    default:  [0, 0, 0, 0, 0, 0]
  }
  
});

//RaceSchema.statics.findOrCreate = require("find-or-create");

module.exports = mongoose.model('Race', RaceSchema);