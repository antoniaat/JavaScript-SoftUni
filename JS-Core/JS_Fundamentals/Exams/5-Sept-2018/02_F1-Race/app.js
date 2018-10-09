function solve(arr) {
    let pilotsInTheRace = arr[0].split(' ');

    function joinPilot(pilot) {
        // Check if pilot it's in the race.
        if (!pilotsInTheRace.includes(pilot)) {
            pilotsInTheRace.push(pilot);
        }
    }

    function crashPilot(pilot) {
        // Check if pilot it's in the race.
        if (pilotsInTheRace.includes(pilot)) {
            let index = pilotsInTheRace.indexOf(pilot);
            if (index > -1) {
                pilotsInTheRace.splice(index, 1);
            }
        }
    }

    function pitPilot(pilot) {
        // Check if pilot it's in the race.
        if (pilotsInTheRace.includes(pilot)) {
            let first = pilotsInTheRace[pilotsInTheRace.indexOf(pilot)];
            let second = pilotsInTheRace[pilotsInTheRace.indexOf(pilot) - 1];
            pilotsInTheRace[pilotsInTheRace.indexOf(pilot)] = second;
            pilotsInTheRace[pilotsInTheRace.indexOf(pilot) - 1] = first;
        }
    }

    function overtakePilot(pilot) {
        if (pilotsInTheRace.includes(pilot)) {
            if (pilotsInTheRace.indexOf(pilot) === pilot.length - 1) {
                array_move(pilotsInTheRace, pilotsInTheRace.indexOf(pilot), pilotsInTheRace[pilotsInTheRace.indexOf(pilot) + 1]);
            } else {
                let first = pilotsInTheRace[pilotsInTheRace.indexOf(pilot)];
                let second = pilotsInTheRace[pilotsInTheRace.indexOf(pilot) - 1];
                pilotsInTheRace[pilotsInTheRace.indexOf(pilot)] = second;
                pilotsInTheRace[pilotsInTheRace.indexOf(pilot) - 1] = first;
            }
        }
    }

    for (let i = 1; i < arr.length; i++) {
        let action = arr[i].split(' ');
        let command = action[0];
        let pilot = action[1];

        if (command === 'Join') {
            joinPilot(pilot);
        } else if (command === 'Crash') {
            crashPilot(pilot);
        } else if (command === 'Pit') {
            pitPilot(pilot);
        } else if (command === "Overtake") {
            overtakePilot(pilot);
        }
    }

    printPilots();
    function printPilots() {
        console.log(pilotsInTheRace.join(' ~ '));
    }
}

solve(["Vetel Hamilton Slavi",
    "Pit Hamilton",
    "Overtake Vetel",
    "Crash Slavi"
]);

// solve(["Vetel Hamilton Raikonnen Botas Slavi",
//     "Pit Hamilton",
//     "Overtake LeClerc",
//     "Join Ricardo",
//     "Crash Botas",
//     "Overtake Ricardo",
//     "Overtake Ricardo",
//     "Overtake Ricardo",
//     "Crash Slavi"
// ]);
