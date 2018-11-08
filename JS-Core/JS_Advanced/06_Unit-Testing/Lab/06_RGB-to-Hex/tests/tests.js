let rgbToHexColor = require('../rgb-to-hex');

let test1 = function () {
    it("Should return true for [1, 2, 2, 1]", function () {
        let expected = true;
        let actual = rgbToHexColor([1, 2, 2, 1]);

        if(expected !== actual) {
            throw new Error("[1, 2, 2, 1] != true");
        }
    });
};

describe("Symetric array", test1);