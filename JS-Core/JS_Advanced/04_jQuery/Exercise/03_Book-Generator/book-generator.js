let createBook = (function createBook() {
    let id = 1;

    return function (selector, title, author, isbn) {
        let container = $(selector);
        let fragment = document.createDocumentFragment();
        let bookId = '';

        let book = createNewBook();
        let btns = createButtons();

        function createNewBook() {
            bookId = "book" + id++;

            bookTitle = $(`<p>${title}</p>`);
            bookTitle.addClass(`title`);

            bookAuthor = $(`<p>${author}</p>`);
            bookAuthor.addClass('author');

            bookIsbn = $(`<p>${Number(isbn)}</p>`);
            bookIsbn.addClass('isbn');

            return [bookTitle, bookAuthor, bookIsbn];
        }

        function createButtons() {
            let selectBtn = $('<button>Select</button>');
            selectBtn.addClass('select');

            let deselectBtn = $('<button>Deselect</button>');
            deselectBtn.addClass('deselect');

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

            return [selectBtn, deselectBtn];
        }

        let jqueryFragment = $(fragment);

        jqueryFragment.append(book[0], book[1], book[2], btns[0], btns[1]);

        let divFragment = $('<div>');
        divFragment.attr('id', `${bookId}`);

        jqueryFragment.appendTo(divFragment);

        container.append(divFragment);
    }
}());