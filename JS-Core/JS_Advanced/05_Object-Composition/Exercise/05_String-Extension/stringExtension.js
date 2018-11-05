(function solve() {

    String.prototype.ensureStart = function (str) {
        if (!this.includes(str)) {
            let newStr = str + this.toString();
            return newStr;
        }

        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.includes(str)) {
            let newStr = this.toString() + str;
            return newStr;
        }

        return this.toString();
    };

    String.prototype.isEmpty = function () {
        if (this.length === 0) {
            return true;
        }

        return false;
    };

    String.prototype.truncate = function (num) {
        if (this.length < num) {
            return this.toString();
        } else if (this.length >= num) {
            let strArray = this.split(' ');


            strArray.pop();
            strArray[strArray.length - 1] += '...';

            return strArray;
        }
    };
}());

let str = 'my string';

console.log(str = str.ensureStart('my'));
console.log(str = str.ensureStart('hello '));
console.log(str = str.truncate(16));
console.log(str = str.truncate(14));
console.log(str = str.truncate(8));
console.log(str = str.truncate(4));
console.log(str = str.truncate(2));
// str = String.format('The {0} {1} fox',
//     'quick', 'brown');
// str = String.format('jumps {0} {1}',
//     'dog');
//