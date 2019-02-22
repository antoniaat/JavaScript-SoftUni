function addItem() {
    let newItemText = document.getElementById('newItemText');
    let newItemValue = document.getElementById('newItemValue');

    let menu = document.getElementById('menu');

    let newOption = document.createElement('option');
    newOption.text = newItemText.value;
    newOption.value = newItemValue.value;

    menu.appendChild(newOption);

    newItemText.value = '';
    newItemValue.value = '';
}