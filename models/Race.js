var mongoose = require('mongoose');

var RaceSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  speed: {
    type:Number,
    min: 0
  },
  description: String,
  abilityScoreModifires: [
    {type:Number, min:0, max: 5, default: 0},
    {type:Number, min:0, max: 5, default: 0},
    {type:Number, min:0, max: 5, default: 0},
    {type:Number, min:0, max: 5, default: 0},
    {type:Number, min:0, max: 5, default: 0},
    {type:Number, min:0, max: 5, default: 0}
  ],
});

//RaceSchema.statics.findOrCreate = require("find-or-create");

module.exports = mongoose.model('Race', RaceSchema);
