let createBook = (function createBook() {
    let id = 1;

    return function (selector, title, author, isbn) {
        let container = $(selector);
        let fragment = document.createDocumentFragment();

        let bookId = "book" + id++;

        let bookTitle = $(`<p>${title}</p>`);
        bookTitle.addClass(`title`);

        let bookAuthor = $(`<p>${author}</p>`);
        bookAuthor.addClass('author');

        let bookIsbn = $(`<p>${Number(isbn)}</p>`);
        bookIsbn.addClass('isbn');

        // create buttons for select and deselect
        let selectBtn = $('<button>Select</button>');
        selectBtn.addClass('select');

        let deselectBtn = $('<button>Deselect</button>');
        deselectBtn.addClass('deselect');

        // attach event listeners for buttons
        selectBtn.click(selectedBtn);
        deselectBtn.click(deselectedBtn);

        function selectedBtn() {
            selectBtn.addClass('selected');
            divFragment.css("border", "2px solid blue")
        }

        function deselectedBtn() {
            selectBtn.removeClass('selected');
            divFragment.css("border", "")
        }

        let jqueryFragment = $(fragment);
        // create book
        bookTitle.appendTo(jqueryFragment);
        bookAuthor.appendTo(jqueryFragment);
        bookIsbn.appendTo(jqueryFragment);
        selectBtn.appendTo(jqueryFragment);
        deselectBtn.appendTo(jqueryFragment);

        let divFragment = $('<div>');
        divFragment.attr('id', `${bookId}`);

        jqueryFragment.appendTo(divFragment);

        // append it to DOM
        container.append(divFragment);
    }
}());
