function solve(array) {
    let matrix = [];
    let width = +array[0];
    let height = +array[1];
    let x = +array[2];
    let y = +array[3];

    for (let i = 0; i < width; i++) {
        matrix.push([]);
    }

    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }
    
    console.log(matrix.map(row => row.join(" ")).join("\n"));
}