let lookupChar = require('../lookUpChar');
let expect = require('chai').expect;

let test = function () {
    it("First parameter should be string, second parameter should be integer", function () {
        let expected = lookupChar(12, 1222);

        expect(expected).to.be.undefined;
    });
};

let test0 = function () {
    it("First parameter should be string, second parameter should be integer", function () {
        let expected = lookupChar(12, 'test');

        expect(expected).to.be.undefined;
    });
};

let test1 = function () {
    it("First parameter should be string, second parameter should be integer", function () {
        let expected = lookupChar('peshoo', 'test');

        expect(expected).to.be.undefined;
    });
};

let test2 = function () {
    it("First parameter should be string, second parameter should be integer", function () {
        let expected = lookupChar('peshoo', 1);

        expect(expected).to.equal('e');
    });
};

let test3 = function () {
    it("Incorrect passed index. Smaller than 0", function () {
        let expected = lookupChar('peshoo', -10);

        expect(expected).to.equal('Incorrect index');
    });
};

let test4 = function () {
    it("Bigger than string length index", function () {
        let expected = lookupChar('peshoo', 25);

        expect(expected).to.equal('Incorrect index');
    });
};

let test5 = function () {
    it("Correct input parameters", function () {
        let expected = lookupChar('peshoo', 4);

        expect(expected).to.equal('o');
    });
};

let test6 = function () {
    it("Correct input parameters", function () {
        let expected = lookupChar('peshoo', 4.12);

        expect(expected).to.be.undefined;
    });
};

describe("Input parameters", test);
describe("Input parameters", test0);
describe("Input parameters", test1);
describe("Input parameters", test2);
describe("Incorrect passed index", test3);
describe("Incorrect passed index", test4);
describe("Incorrect passed index", test5);
describe("Incorrect passed index - floating point number", test6);