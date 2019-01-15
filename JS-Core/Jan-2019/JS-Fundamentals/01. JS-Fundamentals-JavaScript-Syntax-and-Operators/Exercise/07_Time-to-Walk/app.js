function solve(steps, distanceInKm, speedInKmForHour) {
    // Calculate the distance in meters ( from kilometers, the speed is km/h)
    let distanceInMeters = steps * distanceInKm;

    // Convert the speed from hours / 60 to seconds / 60 and convert and multiply it into meters (1000)
    let speedForMeterInSecond = speedInKmForHour / 60 / 60 * 1000;

    let timeSeconds = Math.round(distanceInMeters / speedForMeterInSecond); // Calculate all the seconds

    let rest = Math.floor(distanceInMeters / 500); // Calculate the rests count
    timeSeconds += rest * 60; // one rest is 60 seconds

    let hours = 0;
    let seconds = timeSeconds % 60;
    let minutes = (timeSeconds - seconds) / 60;

    if (minutes > 60) {
        hours = Math.floor(minutes / 60);
        minutes = minutes - (hours * 60);
    }

    formatAndPrintTheTime(hours, minutes, seconds);

    function formatAndPrintTheTime(hours, minutes, seconds) {
        if (seconds < 10) {
            seconds = '0' + seconds;
        }
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        if (hours < 10) {
            hours = '0' + hours;
        }

        console.log(`${hours}:${minutes}:${seconds}`)
    }
}

solve(4000, 0.60, 5);