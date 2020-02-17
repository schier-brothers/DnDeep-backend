var express = require('express');
var router = new express.Router();
var CharacterService = require('../services/characterService');
var Character = require('../models/Character');

const characterService = new CharacterService(Character);

router.get('/', async (_req, res) => {
  try {
    res.status(200).json(await characterService.getAllCharacters());
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode).json({ 'message': error.message });
  }
});

router.get('/expand', async (_req, res) => {
  try {
    res.status(200).json(await characterService.getAllExpandedCharacters());
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode).json({ 'message': error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    res.status(201).json(await characterService.createCharacter(req.body));
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode).json({ 'message': error.message });
  }
});

router.get('/:characterId', async (req, res) => {
  try {
    res.status(200).json(await characterService.findCharacterById(req.params.characterId));
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode).json({ 'message': error.message });
  }
});

router.patch('/:characterId', async (req, res) => {
  try {
    res.status(200).json(await characterService.updateCharacter(req.params.characterId, req.body));
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode).json({ 'message': error.message });
  }
});

router.delete('/:characterId', async (req, res) => {
  try {
    res.status(200).json(await characterService.deleteCharacter(req.params.characterId));
  } catch (error) {
    error.statusCode = error.statusCode || 500;
    res.status(error.statusCode).json({ 'message': error.message });
  }
});

module.exports = router;
