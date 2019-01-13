function solve(arr) {
    let principalSum = +arr[0];
    let interestRatePercent = (+arr[1]) / 100;
    let compoundingPeriod = 12 / (+arr[2]);
    let totalTimeSpanYears = +arr[3];

    let result = principalSum * Math.pow(1 + (interestRatePercent / compoundingPeriod), compoundingPeriod * totalTimeSpanYears)

    console.log(result.toFixed(2));
}

solve([1500, 4.3, 3, 6]);
solve([100000, 5, 12, 25]);