let isOddOrEven = require('../isOddOrEven');
let expect = require('chai').expect;

let test1 = function () {
    it("Subtract string from number", function () {
        let expected = isOddOrEven(12);

        expect(expected).to.be.undefined;
    });
};

let test2 = function () {
    it("Character with odd length", function () {
        let expected = isOddOrEven('pesho');

        expect(expected).to.equal('odd');
    });
};

let test3 = function () {
    it("Character with even length", function () {
        let expected = isOddOrEven('peshoo');

        expect(expected).to.equal('even');
    });
};

describe("Cannot pass a string", test1);
describe("Character with odd length", test2);
describe("Character with even length", test3);