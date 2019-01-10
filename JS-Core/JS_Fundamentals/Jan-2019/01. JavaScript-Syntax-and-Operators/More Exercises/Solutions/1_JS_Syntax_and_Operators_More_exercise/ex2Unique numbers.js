function solve(arr, arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            for (let k = 0; k < arr2.length; k++) {
                if(arr[i]===arr1[j] && arr[i]=== arr2[k]) {
                    result.push(arr[i]);
                }

           }
        }
    }


    result.sort((a, b) => a - b);
    let average = (result.reduce((a,b) => a+b))/result.length;

    let lowMiddle = Math.floor((result.length - 1) / 2);
    let highMiddle = Math.ceil((result.length - 1) / 2);
    let median = (result[lowMiddle] + result[highMiddle]) / 2;
    console.log(`The unique elements are ${result.join(', ')}.`);
    console.log(`Average: ${average}.`);
    console.log(`Median: ${median}.`);

}
solve([5,6,50,10,1,2], [5,4,8,50,2,10], [5,2,50]);
solve([1, 2, 3, 4, 5], [3, 2, 1, 5, 8], [2, 5, 3, 1, 16]);