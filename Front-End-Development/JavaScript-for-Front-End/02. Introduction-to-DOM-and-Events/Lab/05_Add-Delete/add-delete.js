function addItem() {
    // Add new items to list
    let newElement = document.getElementById('newText').value;
    let list = document.getElementById('items');

    // Check if input it's empty
    if (newElement.length === 0) return;

    let listItem = document.createElement('li');
    listItem.textContent = newElement;

    // Add remove option for each list item
    let remove = document.createElement('a');
    let linkText = document.createTextNode("[Delete]");
    remove.appendChild(linkText);
    remove.href = '#';
    remove.addEventListener('click', deleteItem);

    listItem.appendChild(remove);
    list.appendChild(listItem);

    function deleteItem() {
        listItem.remove();
    }
}