function solve() {
    let rows = Array.from(document.getElementsByTagName('tr')).slice(2, 11);
    let count = 0;
    let btn = document.getElementsByTagName('button')[0].addEventListener('click', realTimeCheck);
    let clear = document.getElementsByTagName('button')[1].addEventListener('click', clearTable);
    let p = document.getElementById('check').children[0];
    console.log(p);

    function realTimeCheck() {
        let matrix = getNumbers();
        let isSolve = isSolved(matrix);

        if (isSolve) {
            document.querySelector('table').style.border = "2px solid green";
            p.style.color = "green";
            p.textContent = 'You solve it! Congratulations!'
        } else {

            document.querySelector('table').style.border = "2px solid darkred";
            p.style.color = "darkred";
            p.textContent = 'NOP! You are not done yet...'
        }

        function getNumbers() {
            let numbers = [];
            rows.forEach((row) => {
                let r = [];
                Array.from(row.children).forEach((col) => {
                    r.push(+col.children[0].value)
                });
                numbers.push(r);
            });
            return numbers;
        }

        function isSolved(input) {

            let output = true;
            let values = [];

            input.forEach((row) => {

                values = [1, 2, 3];

                row.forEach((n) => {

                    if (!values.includes(n)) {
                        output = false;
                    } else {
                        let index = values.indexOf(n);
                        values.splice(index, 1);
                    }
                });
            });

            if (output) {
                for (let i = 0; i < 3; i++) {
                    values = [1, 2, 3];
                    let column = [input[0][i], input[1][i], input[2][i]];

                    column.forEach((n) => {
                        if (!values.includes(n)) {
                            output = false;
                        } else {
                            let index = values.indexOf(n);
                            values.splice(index, 1);
                        }
                    });
                }
            }
            return output;
        }
    }

    function clearTable() {
        rows.forEach(r => {
            Array.from(r.children).forEach(d => {
                d.children[0].value = '';
            })
        });
        document.querySelector('table').style.border = "none";
        p.textContent = "";
    }
}