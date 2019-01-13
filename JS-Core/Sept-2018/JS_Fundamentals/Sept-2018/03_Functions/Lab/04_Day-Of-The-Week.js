// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/306.

function printDayOfWeek(day) {
    switch (day)
    {
        case 'Monday' : return 1;
        case 'Tuesday' : return 2;
        case 'Wednesday' : return 3;
        case 'Thursday' : return 4;
        case 'Friday' : return 5;
        case 'Saturday' : return 6;
        case 'Sunday' : return 7;
        default : return 'error';
    }
}

console.log(printDayOfWeek('Wednesday'));