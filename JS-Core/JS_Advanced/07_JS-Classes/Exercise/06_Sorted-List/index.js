class SortedList {
    constructor() {
        this.list = [];
        this.size = 0;
    }

    add(element) {
        this.list.push(element);
        this.size++;

        this.sort();
        
        return this;
    }

    remove(index) {
        if (index >= 0 && index < this.size) {
            this.list.splice(index, 1);
            this.size--;
        }

        return this;
    }

    get(index) {
        return this.list[index];
    }

    sort() {
        this.list = this.list.sort((a, b) => (a - b));
    }
}