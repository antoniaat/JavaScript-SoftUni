function solve(input) {
    let teams = {};

    function addIfContainsPilot(team, gladiator, skillPoints) {
        let found = false;

        for (let i = 0; i < team.length; i++) {
            let gladiatorData = team[i];

            if(gladiatorData.includes(gladiator)) {
                gladiatorData[1] += skillPoints;
                found = true;
                break;
            }
        }

        if(!found) {
            team.push([gladiator, skillPoints]);
        }
    }

    for (let i = 0; i < input.length; i++) {
        if (input[i] === 'Ave Cesar') break;

        let currentLine = input[i].split(' ');

        if (currentLine.length === 5) { //{gladiator} -> {technique} -> {skill}
            let gladiator = currentLine[0];
            let technique = currentLine[2];
            let skillPoints = +currentLine[4];

            if (!teams[gladiator]) {
                teams[gladiator] = {
                    'techniques': [],
                    'skillPoints': 0
                };
            }

            addIfContainsPilot(teams[gladiator]['pilots'], gladiator, skillPoints);
            teams[gladiator]['skillPoints'] += skillPoints;

        } else if (currentLine.length === 3) { //gladiator} vs {gladiator}
            let firstGladiator = currentLine[0];
            let secondGladiator = currentLine[2];
        }
    }

}

let test00 = [
    'Pesho -> BattleCry -> 400',
    'Gosho -> PowerPunch -> 300',
    'Stamat -> Duck -> 200',
    'Stamat -> Tiger -> 250',
    'Ave Cesar'
];

let test01 = [
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Pesho vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Gosho',
    'Ave Cesar'
];

solve(test01);