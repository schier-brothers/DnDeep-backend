# DnDeep-backend
The backend part of DnDeep

to create a Character send a POST request to http://localhost:3000/characters/ (if on local host) with a body similar to what is seen bellow:
{
	 "level": "10",
    "abilityScores": [
        "20",
        "20",
        "20",
        "20",
        "20",
        "20"
    ],
    "_id": "5e42c05e0b7a2c3cc094bc90",
    "name": "Test",
    "proficiencyBonus": "5",
    "hp": "43",
    "hpMax": "43",
    "speed": "30",
    "description": "Endnu en test før jeg oploader det"
	
}
 POST Request to http://localhost:3000/characters/characterId (if on local host) with a Json body similar to seen bellow will update the given parameters of the Character with characterId.
 [
	{"propName":"name", "value": "Emil Schier Christiansen"},
	{"propName":"level", "value": "10"}
]

