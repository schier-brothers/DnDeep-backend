# DnDeep-backend
The backend part of DnDeep

to create a Character send a POST request to http://{localhost}:3000/characters/ (if on local host) with a body similar to what is seen bellow:
{
	 "level": "10",
    "abilityScores": \[
        "20",
        "20",
        "20",
        "20",
        "20",
        "20"],
    "name": "Test",
    "proficiencyBonus": "5",
    "hp": "43",
    "hpMax": "43",
    "speed": "30",
    "description": "Endnu en test før jeg oploader det"
	
}
PATCH request to <http://localhost:3000/characters/{characterId}> (if on local host) with a Json body similar to seen bellow will update the given parameters of the Character with characterId.
\[
	{"propName":"name", "value": "Emil Schier Christiansen"},
	{"propName":"level", "value": "10"}
]

You should have a ".env." file with the following content in your base directory:
`COOKIE_SECRET=
 GOOGLE_CLIENT_ID=
 GOOGLE_CLIENT_SECRET=
 DB_CONN=
 SERVER_ADDRESS=
 PORT=
