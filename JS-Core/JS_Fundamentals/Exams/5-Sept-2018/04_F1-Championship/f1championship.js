function solve(input) {
    function addIfContainsPilot(pilots, pilotName, pilotPoints) {
        let found = false;

        for (let i = 0; i < pilots.length; i++) {
            let pilotData = pilots[i];

            if(pilotData.includes(pilotName)) {
                pilotData[1] += pilotPoints;
                found = true;
                break;
            }
        }

        if(!found) {
            pilots.push([pilotName, pilotPoints]);
        }
    }

    let teams = {};

    for (let i = 0; i < input.length; i++) {
        let pilotInfo = input[i].split(' -> ');

        let teamName = pilotInfo[0];
        let pilotName = pilotInfo[1];
        let pilotPoints = Number(pilotInfo[2]);

        if (!teams[teamName]) {
            teams[teamName] = {
                'pilots': [],
                'points': 0
            };
        }

        addIfContainsPilot(teams[teamName]['pilots'], pilotName, pilotPoints);
        teams[teamName]['points'] += pilotPoints;
    }

    let sortedTeams = [];

    for (const teamName in teams) {
        sortedTeams.push([teamName, teams[teamName]['points']]);
    }

    sortedTeams = sortedTeams.sort((first, second) => {
        let firstValue = Number(first[1]);
        let secondValue = Number(second[1]);

        return secondValue - firstValue;
    });

    for (let i = 0; i < sortedTeams.length && i < 3; i++) {
        const sortedTeam = sortedTeams[i];

        console.log(sortedTeam[0] + ': ' + sortedTeam[1]);

        let sortedTeamPilots = teams[sortedTeam[0]]['pilots'];

        sortedTeamPilots = sortedTeamPilots.sort((firstPilot, secondPilot) => {
            let firstPilotPoints = firstPilot[1];
            let secondPilotPoints = secondPilot[1];

            return secondPilotPoints - firstPilotPoints;
        });

        for (const pilot of sortedTeamPilots) {
            console.log('-- ' + pilot[0] + ' -> ' + pilot[1]);
        }
    }
}

let test0 = [
    "Ferrari -> Kimi Raikonnen -> 25",
    "Ferrari -> Sebastian Vettel -> 18",
    "Mercedes -> Lewis Hamilton -> 10",
    "Mercedes -> Valteri Bottas -> 8",
    "Red Bull -> Max Verstapen -> 6",
    "Red Bull -> Daniel Ricciardo -> 4"
];

solve(test0);