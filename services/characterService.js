class CharacterService {
  constructor(characterModel) {
    this.CharacterModel = characterModel;
  }

  async getAllExpandedCharacters() {
    return this.CharacterModel
      .find()
      .select('-__v')
      .lean()
      .then((characters) => {
        return {
          count: characters.length,
          characters
        };
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.message = 'Unknown error';
        }
        throw err;
      });
  }

  async getAllCharacters() {
    return this.CharacterModel
      .find()
      .select('_id')
      .lean()
      .then((characters) => {
        return {
          count: characters.length,
          characters
        };
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.message = 'Unknown error';
        }
        throw err;
      });
  }

  async createCharacter(characterParams) {
    const character = new this.CharacterModel(characterParams);
    return character
      .save()
      .then((savedCharacter) => {
        return { '_id': savedCharacter._id };
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.message = 'Unknown error';
        }
        throw err;
      });
  }

  async findCharacterById(id) {
    return await this.CharacterModel
      .findById(id)
      .select('-__v')
      .then((character) => {
        if (!character) {
          throw {
            'statusCode': 404,
            'message': 'No character found for id: ' + id
          };
        }
        return character;
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.message = 'Unknown error';
        }
        throw err;
      });
  }

  async updateCharacter(id, body) {
    return this.CharacterModel.findByIdAndUpdate(id, body)
      .then((character) => {
        if (!character) {
          throw {
            'statusCode': 404,
            'message': 'No character found for id: ' + id
          };
        }
        return {
          message: 'Character updated'
        };
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.message = 'Unknown error';
        }
        throw err;
      });
  }

  async deleteCharacter(id) {
    return this.CharacterModel.findByIdAndDelete(id)
      .then((character) => {
        if (!character) {
          throw {
            'statusCode': 404,
            'message': 'No character found for id: ' + id
          };
        }
        return {
          message: 'Character deleted'
        };
      })
      .catch((err) => {
        if (!err.statusCode) {
          err.message = 'Unknown error';
        }
        throw err;
      });
  }
}

module.exports = CharacterService;
