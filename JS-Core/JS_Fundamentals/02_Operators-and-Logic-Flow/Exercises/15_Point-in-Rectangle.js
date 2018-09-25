function solve(arr) {
    let [x, y, xMin, xMax, yMin, yMax] = arr.map(Number);

    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax)
        console.log('inside');
    else
        console.log('outside');
}