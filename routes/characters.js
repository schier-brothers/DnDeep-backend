var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

var Character = require('../models/Character');

router.get('/', (req, res, next) => {
  Character.find()
    .select('_id name level')
    .exec()
    .then((docs) => {
      var response = {
        count: docs.length,
        characters: docs.map((doc) => {
          return {
            _id: doc._id,
            name: doc.name,
            level: doc.level,
            request: {
              type: 'GET',
              url: 'http://localhost:3000/characters/' + doc._id
            }
          };
        })
      };
      res.status(200).json(response);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.post('/', (req, res, next) => {
  const character = new Character({

    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    level: req.body.level,
    proficiencyBonus: req.body.proficiencyBonus,
    hp: req.body.hp,
    hpMax: req.body.hpMax,
    speed: req.body.speed,
    description: req.body.description,
    abilityScores: req.body.abilityScores,
    race: req.body.raceId,
    characterClass: req.body.characterClassId

  });
  character.save()
    .then((result) => {
      res.status(201).json({
        createdCharacter: {
          _id: result._id,
          name: result.name,
          level: result.level,
          proficiencyBonus: result.proficiencyBonus,
          hp: result.hp,
          hpMax: result.hpMax,
          speed: result.speed,
          description: result.description,
          abilityScores: result.abilityScores,
          race: result.raceId,
          characterClass: result.characterClassId,
          request: {
            type: 'GET',
            url: 'http://localhost:3000/characters/' + result._id
          }
        }
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.get('/:characterId', (req, res, next) => {
  const id = req.params.characterId;
  Character.findById(id)
    .select('-__v')
    .exec()
    .then((doc) => {
      if (doc) {
        res.status(200).json(doc);
      } else {
        res.status(404).json({ message: 'No valid entry found for provided ID' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

router.patch('/:characterId',(req, res, next) => {
  const id = req.params.characterId;
  const updateOps = {};
  for(const ops of req.body){
    updateOps[ops.propName] = ops.value;
  }
  Character.updateOne({_id: id}, {$set: updateOps })
  .exec()
  .then((result) => {
    res.status(200).json({ message: 'Character updatet.',
        request: {
          type: 'GET',
          url: 'http://localhost:3000/characters/' + id
        }
    });
  })
  .catch((err) => {
    console.log(err);
    res.status(500).json({error: err});
  });
});

router.delete('/:characterId', (req, res, next) => {
  const id = req.params.characterId;
  Character.deleteOne({ _id: id })
    .exec()
    .then((result) => {
      res.status(200).json({
        message: 'Character deleted',
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

module.exports = router;
