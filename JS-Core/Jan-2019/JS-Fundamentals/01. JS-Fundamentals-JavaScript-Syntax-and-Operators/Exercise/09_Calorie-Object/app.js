function solve(arr) {
    let result = {};

    for (let i = 0; i < arr.length; i + 2) {
        let propertyName = arr[i];
        let propertyValue = arr[i + 1];

        result[propertyName] = propertyValue;
    }

    console.log(result);
}

solve(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);