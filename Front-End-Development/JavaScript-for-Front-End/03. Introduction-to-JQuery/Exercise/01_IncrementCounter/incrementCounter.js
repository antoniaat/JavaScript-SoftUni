"use strict";

function increment(selector) {
    let container = $(selector);
    let fragment = document.createDocumentFragment();
    let textArea = $('<textarea>');
    let incrementBtn = $('<button>Increment</button>');
    let addBtn = $('<button>Add</button>');
    let list = $('<ul>');

    // text area formation
    textArea
        .prop('disabled', true)
        .addClass('counter')
        .val(0);

    // buttons formation
    incrementBtn
        .addClass('btn')
        .attr('id', 'incrementBtn');
    addBtn
        .addClass('btn')
        .attr('id', 'addBtn');

    // list formation
    list.addClass('results');

    // Events
    $(incrementBtn).click(incrementNumber);

    function incrementNumber() {
        textArea.val(+textArea.val() + 1);
    }

    $(addBtn).click(addToList);

    function addToList() {
        let li = $(`<li>${textArea.val()}</li>`);
        li.appendTo(list);
    }

    // Attach to fragment
    textArea.appendTo(fragment);
    incrementBtn.appendTo(fragment);
    addBtn.appendTo(fragment);
    list.appendTo(fragment);

    // Attach to DOM
    container.append(fragment);
}
