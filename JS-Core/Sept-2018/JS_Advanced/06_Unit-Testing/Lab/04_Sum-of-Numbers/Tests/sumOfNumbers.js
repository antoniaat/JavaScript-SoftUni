function sum(arr) {
    let sum = 0;

    for (let num of arr) {
        sum += Number(num);
    }

    return sum;
}

let test1 = function () {
    it("Should return 3 for [1,2]", function () {
        let expected = 3;
        let actual = sum([1,2]);

        if(expected !== actual) {
            throw new Error("3 != 1+2")
        }
    });
};

let test2 = function () {
    it("Should return 0 for []", function () {
        let expected = 0;
        let actual = sum([]);

        if(expected !== actual) {
            throw new Error("0 != []")
        }
    });
};

let test3 = function() {
    it("Should return NaN for [1, 'pesho']", function () {
        let actual = sum([1, 'pesho']);

        if(!isNaN(actual)) {
            throw new Error("NaN != [1, 'pesho']")
        }
    });
};

describe("Test sumator", test1);
describe("Test sumator", test2);
describe("Test sumator", test3);