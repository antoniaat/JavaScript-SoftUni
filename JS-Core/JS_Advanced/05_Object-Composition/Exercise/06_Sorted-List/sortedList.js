(function solve() {
    let collection = [];

    Array.prototype.add = function (element) {
        this.push(element);
    };

    Array.prototype.remove = function (index) {
        if (this.length < index && index >= 0) {
            this.splice(index, 1);
        }
    };

    Array.prototype.get = function (index) {
        return this.indexOf(index);
    };
    
    Array.prototype.size = function () {
        return this.length;
    };
}());