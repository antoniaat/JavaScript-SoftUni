function calculateArea(input) {
    let inputType = typeof input;

    let result;
    if (inputType === "number") {
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
}