// Problems for in-class lab for the “JavaScript Fundamentals” course @ SoftUni.
// Submit your solutions in the SoftUni judge system at https://judge.softuni.bg/Contests/287/.

function nextDay(year,month,day){
    let date = new Date(year, month-1, day);
    let oneDay = 24 * 60 * 60 * 1000;
    let nextDate = new Date(date.getTime() + oneDay);
    return nextDate.getFullYear() + "-" + (nextDate.getMonth() + 1)
        +  '-' + nextDate.getDate();
}

console.log(nextDay(2016, 9, 30))