function solution(input) {
    let pilots = input[0].split(' ');

    for (let i = 1; i < input.length; i++) {
        let commandArgs = input[i].split(' ');

        let command = commandArgs[0];
        let pilot = commandArgs[1];

        switch (command) {
            case 'Join':
                if (!pilots.includes(pilot)) {
                    pilots.push(pilot);
                }

                break;
            case 'Crash':
                if (pilots.includes(pilot)) {
                    pilots.splice(pilots.indexOf(pilot), 1);
                }

                break;
            case 'Pit':
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf(pilot);

                    if (index === pilots.length - 1) {
                        pilots.unshift(pilots.pop());
                    } else {
                        let nextPilot = pilots[index + 1];
                        pilots[index + 1] = pilots[index];
                        pilots[index] = nextPilot;
                    }
                }

                break;
            case 'Overtake':
                if (pilots.includes(pilot)) {
                    let index = pilots.indexOf(pilot);

                    if (index === 0) {
                        pilots.push(pilots.shift());
                    } else {
                        let previousPilot = pilots[index - 1];
                        pilots[index - 1] = pilots[index];
                        pilots[index] = previousPilot;
                    }
                }

                break;
        }
    }

    console.log(pilots.join(' ~ '));
}

let test001 = [
    "Vetel Hamilton Slavi",
    "Pit Hamilton",
    "Overtake Vetel",
    "Crash Slavi"];

let test002 = [
    "Vetel Hamilton Raikonnen Botas Slavi",
    "Pit Hamilton",
    "Overtake LeClerc",
    "Join Ricardo",
    "Crash Botas",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Overtake Ricardo",
    "Crash Slavi"];

let test003 = [
    "Toni Ivo",
    "Pit Ivo"
];

solution(test003);