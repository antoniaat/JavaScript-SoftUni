function extractText() {
    let textArea = document.getElementById('result');
    textArea.value = '';
    let ul = document.getElementById('items');
    let listItems = ul.children;

    for (let i = 0; i < listItems.length; i++) {
        textArea.value += listItems[i].textContent + '\n';
    }
}