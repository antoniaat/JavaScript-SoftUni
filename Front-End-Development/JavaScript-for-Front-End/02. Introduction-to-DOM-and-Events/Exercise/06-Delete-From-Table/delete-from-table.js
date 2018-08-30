function deleteByEmail() {
    let targetEmail = document.getElementsByName('email')[0].value;
    let columns = document.querySelectorAll('table tr');
    let successfullyRemoved = false;

    for (let i = 1; i < columns.length; i++) {
        let currentEmail = columns[i].children[1].textContent;

        if (currentEmail === targetEmail) {
            let row = columns[i];
            row.parentNode.removeChild(row);
            successfullyRemoved = true;
        }
    }

    if (successfullyRemoved) {
        document.getElementById('result').textContent = 'Deleted.';
    } else {
        document.getElementById('result').textContent = 'Not found.';
    }
}