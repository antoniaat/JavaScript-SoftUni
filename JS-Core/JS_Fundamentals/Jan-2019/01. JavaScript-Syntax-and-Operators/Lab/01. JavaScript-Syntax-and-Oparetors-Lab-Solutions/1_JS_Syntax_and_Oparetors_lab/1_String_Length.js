function solve(arr1, arr2, arr3) {
    let sumLength;
    let averageLength;
    let firstArgumentLength = arr1.length;
    let secondArgumentLength = arr2.length;
    let thirdArgumentLength = arr3.length;
    sumLength = firstArgumentLength+secondArgumentLength+thirdArgumentLength;
    averageLength = Math.floor(sumLength/3);

    console.log(sumLength);
    console.log(averageLength);
}
solve('pasta', '5', '22.3');



solve('chocolate', 'ice cream', 'cake');
