# DnDeep-backend
The backend part of DnDeep

To create a Character do `POST /characters` with a json body similar to what is seen below:
```json
{
    "level": "10",
    "abilityScores": [
        "20",
        "20",
        "20",
        "20",
        "20",
        "20"],
    "name": "Jane Doe",
    "proficiencyBonus": "5",
    "hp": "43",
    "hpMax": "43",
    "speed": "30",
    "description": "An awesome new character!",
    "characterClass": "5e49929b837bfd3594b0d887",
    "race": "5e4993b8837bfd3594b0d88a"
}
```
Do `GET /characters` to get a list of ids for all characters.

Do `GET /characters/expand` to get an expanded list of all characters.

Do `GET /characters/{characterId}` to retrieve all information on a specific character.

Do `DELETE /characters/{characterId}` to delete the entry of a specific character.

Do `PATCH /characters/{characterId}` with a json body similar to seen below to update the given parameters of the Character with characterId.
```json
{
    "name": "John Doe",
    "level": "10"
}
```
You should have a ".env." file with the following content in your base directory:
```
COOKIE_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
DB_CONN=
SERVER_ADDRESS=
PORT=
```
