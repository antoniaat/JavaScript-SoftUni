class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    calcArea() {
        return this.width * this.height;
    }
}


let expect = require('chai').expect;

describe("Rectangle class tests", function() {
    it("Rectangle should be class", function() {
        expect(typeof Rectangle).to.be.equal('function',
            "Class 'Rectangle' not found");
        expect(typeof Rectangle.constructor).to.be.equal('function',
            "'Rectangle.constructor' not found");
        expect(Rectangle.length).to.be.equal(3,
            "'Rectangle.constructor' should take 3 parameters");
        expect(typeof Rectangle.constructor.name).to.be.equal('string',
            "'Rectangle.constructor' not found");
    });

    it("Rectangle should have width, height and color", function() {
        let r = new Rectangle(20, 30, 'yellow');
        expect(r.width).to.be.equal(20,
            "Property 'width' not working");
        expect(r.height).to.be.equal(30,
            "Property 'height' not working");
        expect(r.color).to.be.equal('yellow',
            "Property 'color' not working");
    });

    it("Rectangle.calcArea() should work correctly", function() {
        let r = new Rectangle(5, 8, 'green');
        expect(typeof r.calcArea).to.be.equal('function',
            "Method 'calcArea()' does not exist");
        expect(r.calcArea()).to.be.equal(40);
    });
});
