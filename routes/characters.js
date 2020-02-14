var express = require('express');
var router = new express.Router();
var mongoose = require('mongoose');
var characterService = require('../services/characterService')
var Character = require('../models/Character');

const characterServiceInstance = new characterService(Character,mongoose);

router.get('/', async (req, res, next) => {
  res.status(200).json(await characterServiceInstance.getAbbreviatedList());
});

router.get('/fullList', async (req, res, next) => {
  res.status(200).json(await characterServiceInstance.getFullList());
});

router.post('/', async (req, res, next) => {
  res.status(201).json(await characterServiceInstance.createCharacter(req.body));
});

router.get('/:characterId', async (req, res, next) => {
  res.status(200).json(await characterServiceInstance.findCharById(req.params.characterId));
});

router.patch('/:characterId', async (req, res, next) => {
  res.status(200).json(await characterServiceInstance.updateCharacter(req.params.characterId, req.body));
});

router.delete('/:characterId', async (req, res, next) => {
  res.status(200).json(await characterServiceInstance.deleteCharacter(req.params.characterId));
});

module.exports = router;
