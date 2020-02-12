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
    "description": "An awesome new character!"
}
```

Do `PATCH /characters/{characterId}` with a json body similar to seen below to update the given parameters of the Character with characterId.
```json
[
    {"propName":"name", "value": "John Doe"},
    {"propName":"level", "value": "10"}
]
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
