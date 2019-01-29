function solve() {
    document.getElementById('searchBtn').addEventListener('click', () => {

        let selectRow = document.getElementsByClassName('select');
        if (selectRow.length > 0) {
            Array.from(selectRow).forEach(tr => {
                tr.classList.remove('select');
            });
        }

        let inputInfo = document.getElementById('searchField');
        let val = inputInfo.value.toLocaleLowerCase();
        inputInfo.value = '';

        let rows = Array.from(document.querySelector("table tbody").children);


        rows.forEach(row => {
            Array.from(row.children).forEach(data => {

                if (data.textContent.toLowerCase().includes(val)) {
                    row.classList.add('select');
                }
            });
        });
    });
}