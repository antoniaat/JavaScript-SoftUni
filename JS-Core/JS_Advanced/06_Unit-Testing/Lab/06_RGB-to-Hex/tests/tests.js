let rgbToHexColor = require('../rgb-to-hex');
let expect = require('chai').expect;

let test1 = function () {
    it("Should return undefined for wrong parameter", function () {
       expect(rgbToHexColor('#test1', '#black', '#909090')).to.equal(undefined);
    });
};

let test2 = function () {
    it("Should return true for undefined", function () {
        expect(rgbToHexColor(150, 200, 5)).to.equal('#96C805');
    });
};

let test3 = function () {
    it("Should return undefined for wrong parameter", function () {
        expect(rgbToHexColor(2, 122, '#909090')).to.equal(undefined);
    });
};

let test4 = function () {
    it("Should return undefined for negative parameters", function () {
        expect(rgbToHexColor(-2, -122, -12)).to.equal(undefined);
    });
};

let test5 = function () {
    it("Should return undefined for upper than 255 parameters", function () {
        expect(rgbToHexColor(333, 564, 1000)).to.equal(undefined);
    });
};

let test6 = function () {
    it("Should work for upper limit", function () {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
};

let test7 = function () {
    it("Should work for down limit", function () {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
};

describe("Undefined parameters", test1);
describe("Returns the correct color", test2);
describe("Undefined parameters", test3);
describe("Undefined parameters", test4);
describe("Undefined parameters", test5);
describe("Upper limit", test6);
describe("Down limit", test7);
