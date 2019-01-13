let result = (function solve() {
    let solution = {};

    solution.add = function (vec1, vec2) { // [1,1] [1,0]
        let firstSum = vec1[0] + vec2[0];
        let secondSum = vec1[1] + vec2[1];

        let result = [firstSum, secondSum];

        return result;
    };

    solution.multiply = function (vec1, scalar) {
        let firstSum = vec1[0] * scalar;
        let secondSum = vec1[1] * scalar;

        let result = [firstSum, secondSum];

        return result;
    };

    solution.length = function (vec1) {
        let result = Math.sqrt(vec1[0] * vec1[0] + vec1[1] * vec1[1]);

        return result;
    };

    solution.dot = function (vec1, vec2) {
        let result = vec1[0] * vec2[0] + vec1[1] * vec2[1];

        return result;
    };

    solution.cross = function (vec1, vec2) {
        let result = vec1[0] * vec2[1] - vec1[1] * vec2[0];

        return result;
    };

    return solution;
}());

console.log(result.add([1, 1], [1, 0]));
console.log(result.multiply([3.5, -2], 2));
console.log(result.length([3, -4]));
console.log(result.dot([1, 0], [0, -1]));
console.log(result.cross([3, 7], [1, 0]));