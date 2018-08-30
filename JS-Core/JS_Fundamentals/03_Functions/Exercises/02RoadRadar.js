// Problems for exercises and homework for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/310/.

function getLimit(zone) {
    switch (zone) {
        case 'motorway':
            return 130;
        case 'interstate':
            return 90;
        case 'city':
            return 30;
        case 'residential':
            return 20;
    }
}

function getInfraction(speed, limit) {
    let overSpeed = parseInt(speed) - parseInt(limit);

    if (overSpeed <= 0) {
        return false;
    }
    else {
        if (overSpeed > 0 && overSpeed <= 20) {
            return 'speeding';
        }
        else if (overSpeed > 20 && overSpeed <= 40) {
            return 'excessive speeding';
        }
        else {
            return 'reckless driving';
        }
    }
}

function solve(input) {
    let limit = getLimit(input[1]);
    let infraction = getInfraction(parseInt(input[0]), limit);
    if (infraction) {
        console.log(infraction);
    }
}

solve([120, 'interstate']);
