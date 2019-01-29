function solve(array) {
    let result = [];
    let n = 0;
    for (let i = 0; i < array.length; i++) {
        let command = array[i];
        n++;

        if (command === "add") {
            result.push(n);
        } else {
            result.pop();
        }
    }
    if (result.length === 0) {
        result.push('Empty');
    }
    for (let j = 0; j < result.length; j++) {
        console.log(result[j]);
    }
}