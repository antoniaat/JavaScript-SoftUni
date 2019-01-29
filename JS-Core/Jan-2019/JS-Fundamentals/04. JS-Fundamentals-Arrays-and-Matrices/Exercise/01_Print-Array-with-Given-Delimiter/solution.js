function solve(array) {
    let delimiter = array[array.length - 1];
    let result = "";
    array.pop();
    for (let i = 0; i < array.length; i++) {
        if (i === 0) {
            result += array[i]
        } else {
            result += delimiter + array[i];
        }
    }
    console.log(result);
}