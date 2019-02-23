(function solve() {
    Array.prototype.last = () => {
        return this[this.length - 1];
    };

    Array.prototype.skip = n => {
        let result = [];
        for (let i = n; i < this.length; i++) {
            result.push(this[i]);
        }

        return result;
    };

    Array.prototype.take = n => {
        let result = [];
        for (let i = 0; i < n; i++) {
            result.push(this[i]);
        }

        return result;
    };

    Array.prototype.sum = () => {
        let sum = 0;
        for (let i = 0; i < this.length; i++) {
            sum += this[i];
        }

        return sum;
    };

    Array.prototype.average = () => {
        return this.sum() / this.length;
    };
}());



