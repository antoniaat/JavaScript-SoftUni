function subsum(arr, startIndex, endIndex) {

    if (!Array.isArray(arr)) {
        return NaN;
    } else if (startIndex < 0) {
        startIndex = 0;
    } else if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }

    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        let currentElement = +arr[i];
        sum += currentElement;
    }

    return sum;
}

console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));
console.log(subsum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1));
console.log(subsum([10, 'twenty', 30, 40], 0, 2));