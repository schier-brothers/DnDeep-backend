
class CharacterService {
  constructor(characterModel, mongoose) {
    this.CharacterModel = characterModel;
    this.mongoose = mongoose;
  }

  async getFullList() {
    var found = this.CharacterModel.find()
      .select('-__v')
      .exec()
      .then((docs) => {
        return {
          count: docs.length,
          characters: docs.map((doc) => {
            return {
              _id: doc._id,
              name: doc.name,
              level: doc.level,
              proficiencyBonus: doc.proficiencyBonus,
              abilityScores: doc.abilityScores,
              hp: doc.hp,
              hpMax: doc.hpMax,
              description: doc.description,
              race: doc.raceId,
              characterClass: doc.characterClassId,
              request: {
                type: 'GET',
                url: 'http://' + process.env.SERVER_ADDRESS + ':' + process.env.PORT + '/characters/' + doc._id
              }
            };
          })
        };
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    return found;
  }

  async getAbbreviatedList() {
    var found = this.CharacterModel.find()
      .select('-__v')
      .exec()
      .then((docs) => {
        return {
          count: docs.length,
          characters: docs.map((doc) => {
            return {
              _id: doc._id,
              name: doc.name,
              level: doc.level,
              request: {
                type: 'GET',
                url: 'http://' + process.env.SERVER_ADDRESS + ':' + process.env.PORT + '/characters/' + doc._id
              }
            };
          })
        };
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    return found;
  }

  async createCharacter(body) {
    const character = new this.CharacterModel({
      _id: new this.mongoose.Types.ObjectId(),
      name: body.name,
      level: body.level,
      proficiencyBonus: body.proficiencyBonus,
      hp: body.hp,
      hpMax: body.hpMax,
      speed: body.speed,
      description: body.description,
      abilityScores: body.abilityScores,
      race: body.raceId,
      characterClass: body.characterClassId
    });
    const createdChar = character.save()
      .exec()
      .then((result) => {
        return {
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
              url: 'http://' + process.env.SERVER_ADDRESS + ':' + process.env.PORT + '/characters/' + result._id
            }
          }
        };
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    return createdChar;
  }

  async findCharById(id) {
    var found = await this.CharacterModel.findById(id).select('-__v')
      .exec()
      .then((doc) => {
        if (doc) {
          return {
            _id: doc._id,
            name: doc.name,
            level: doc.level,
            proficiencyBonus: doc.proficiencyBonus,
            abilityScores: doc.abilityScores,
            hp: doc.hp,
            hpMax: doc.hpMax,
            description: doc.description,
            race: doc.raceId,
            characterClass: doc.characterClassId,
            requests: {
              raceRequest: {
                type: 'GET',
                url: 'http://' + process.env.SERVER_ADDRESS + ':' + process.env.PORT + '/race/' + doc.raceId
              },
              characterClassRequest: {
                type: 'GET',
                url: 'http://' + process.env.SERVER_ADDRESS + ':' + process.env.PORT + '/characterClass/' + doc.characterClassId
              }
            }
          };
        } else {
          return { message: 'no valid entry for provided ID' };
        }
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    return found;
  }

  async updateCharacter(id, body) {
    const updateOps = {};
    for (const ops of body) {
      updateOps[ops.propName] = ops.value;
    }
    const response = this.CharacterModel.updateOne({ _id: id }, { $set: updateOps })
      .exec()
      .then((result) => {
        return {
          message: 'Character updated.',
          request: {
            type: 'GET',
            url: 'http://' + process.env.SERVER_ADDRESS + ':' + process.env.PORT + '/characters/' + id
          }
        };
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
    return response;
  }

  async deleteCharacter(id) {
    return this.CharacterModel.deleteOne({ _id: id })
      .exec()
      .then((result) => {
        return {
          message: 'Character deleted'
        };
      })
      .catch((err) => {
        console.log(err);
        return err;
      });
  }
}

module.exports = CharacterService;
