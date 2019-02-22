function processor(arr) {
    let list = [];

    function removeElement(currentItem) {
        const obj = {
            input: list,
            removeItem(item) {
                this.input = this.input.filter(i => i !== item);
                return this;
            }
        };

        const output = obj.removeItem(currentItem);

        return output.input;
    }

    for (let i = 0; i < arr.length; i++) {
        let currentLineTokens = arr[i].split(' ');
        let command = currentLineTokens[0];

        if (command === 'add') {
            list.push(currentLineTokens[1]);
        } else if (command === 'remove') {
            list = removeElement(currentLineTokens[1]);
        } else if (command === 'print') {
            console.log(list.join(','));
        }
    }

}

let test0 = ['add hello', 'add again', 'remove hello', 'add again', 'print'];
let test1 = ['add pesho', 'add gosho', 'add pesho', 'remove pesho', 'print'];

processor(test0);