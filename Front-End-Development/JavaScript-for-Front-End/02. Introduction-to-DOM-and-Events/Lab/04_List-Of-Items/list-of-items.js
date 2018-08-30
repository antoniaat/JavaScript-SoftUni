function addItem() {
    let newElement = document.getElementById('newItemText').value;
    let list = document.getElementById('items');

    let listItem = document.createElement('li');
    listItem.textContent = newElement;
    list.appendChild(listItem);
}

function addItem() {
    
    let newItem = document.getElementById('newItemText').value; 
    let addItem = document.createElement('li');
    addItem.textContent = newItem;

    // console.dir(newItem);
    // console.dir(addItem);

      document.getElementById('ítems')
    .appendChild(addItem.value);
    // document.body.appendChild(ap