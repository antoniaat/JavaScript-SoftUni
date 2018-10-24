function domSearch(selector, caseSensitive) {
    let container = $(selector);
    addNewUsers();
    searchUser();
    usersList();

    function addNewUsers() {
        let div = $('<div>')
            .addClass('add-controls')
            .append(
                $('<label>')
                    .text('Enter text:')
                    .attr('id', 'enteredText'),
                $('<input type="text">')
                    .attr('id', 'newUser'),
                $('<a href="#">Add</a>')
                    .addClass('button')
                    .click(addNewUser)
            );

        div.appendTo(container);

        function addNewUser() {
            if ($('#newUser').val() !== '') {
                let username = $('#newUser').val();
                let listItem = $(`<li>`)
                    .addClass('list-item');
                $('<a class ="button">X</a>')
                    .appendTo(listItem)
                    .click(deleteUser);
                $(`<strong>${username}</strong>`)
                    .appendTo(listItem);

                listItem.appendTo($('.items-list'));
                $('#newUser').val('');
            }
        }

        function deleteUser() {
            $(this).parent().remove();
        }
    }

    function usersList() {
        container.append($('<div>')
            .addClass('result-controls')
            .append($('<ul>').addClass('items-list')));
    }

    function searchUser() {
        container.append($('<div>')
            .addClass('search-controls')
            .append($('<label>')
                .text('Search:'))
            .append($('<input type="text">')
                .attr('id', 'searched')));

        $(".items-list").hide();

        $("#searched").keyup(function () {
            $('.list-item').each(function () {
                let firstLiText = $(this).text().substring(1);
                let currentWord = $('#searched').val();

                if (!firstLiText.startsWith(currentWord)) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            });
        });

        if (caseSensitive === true) {
            $(".items-list").css('display', 'none');
        } else {
            $(".items-list").css('display', 'block');
        }
    }
}
