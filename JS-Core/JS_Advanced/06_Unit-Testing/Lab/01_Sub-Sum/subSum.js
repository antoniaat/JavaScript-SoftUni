function subsum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr)) {
        return NaN;
    } else if (startIndex < 0) {
        startIndex = 0;
    } else if (endIndex > arr.length - 1) {
        endIndex = arr.length - 1;
    }
}

console.log(subsum([10, 20, 30, 40, 50, 60], 3, 300));