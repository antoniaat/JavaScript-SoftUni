function solve(arr) {
    let numberToRound = +arr[0];
    let precision = +arr[1];

    if (precision > 15) precision = 15;

    console.log(roundToX(numberToRound, precision));

    function roundToX(numberToRound, precision) {    
        return +(Math.round(numberToRound + "e+"+precision)  + "e-"+precision);
    }
}

solve([3.1415926535897932384626433832795, 2]);
solve([10.5, 3]);