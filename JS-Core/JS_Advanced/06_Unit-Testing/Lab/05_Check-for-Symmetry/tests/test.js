let isSymmetric = require('../checkForSummetry');

let test1 = function () {
    it("Should return true for [1, 2, 2, 1]", function () {
        let expected = true;
        let actual = isSymmetric([1, 2, 2, 1]);

        if(expected !== actual) {
            throw new Error("[1, 2, 2, 1] != true");
        }
    });
};

let test2 = function () {
    it("Should return true for [1, 2, 1]", function () {
        let expected = true;
        let actual = isSymmetric([1, 2, 1]);

        if(expected !== actual) {
            throw new Error("[1, 2, 1] != true");
        }
    });
};


let test3 = function () {
    it("Should return true for [1, 2, 'pesho']", function () {
        let expected = false;
        let actual = isSymmetric([1, 2, 'pesho']);

        if(expected !== actual) {
            throw new Error("[1, 2, 'pesho'] != false");
        }
    });
};

let test4 = function () {
    it("The argument is not an array.", function () {
        let expected = false;
        let actual = isSymmetric('test');

        if(expected !== actual) {
            throw new Error("'test' != Array");
        }
    });
};

let test5 = function () {
    it("The argument is not an array.", function () {
        let expected = false;
        let actual = isSymmetric(100);

        if(expected !== actual) {
            throw new Error("100 != Array");
        }
    });
};

describe("Symetric array", test1);
describe("Symetric array", test2);
describe("Symetric array", test3);
describe("Symetric array", test4);
describe("Symetric array", test5);