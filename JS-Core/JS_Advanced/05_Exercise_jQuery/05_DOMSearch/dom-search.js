function domSearch(selector, caseSensitive) {
    let container = $(selector);
    addNewUsers();
    searchUser();
    usersList();

    function addNewUsers() {
        let div = $('<div>')
            .addClass('add-controls');

        $('<label>')
            .text('Enter text:')
            .attr('id', 'enteredText')
            .appendTo(div);

        $('<input type="text">')
            .attr('id', 'newUser')
            .appendTo(div);

        $('<a href="#">Add</a>')
            .addClass('button')
            .click(addNewUser)
            .appendTo(div);

        div.appendTo(container);

        // attach events to add button
        function addNewUser() {
            if($('#newUser').val() !== ''){
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
        let resultControls = $('<div>').addClass('result-controls');
        let itemsList = $('<ul>').addClass('items-list');

        itemsList.appendTo(resultControls);
        resultControls.appendTo(container);
    }

    function searchUser() {
        let div = $('<div>')
            .addClass('search-controls');

        $('<label>')
            .text('Search:')
            .appendTo(div);

        $('<input type="text">')
            .attr('id', 'searched')
            .appendTo(div);

        div.appendTo(container);

        // test
        $(".items-list").hide();

        $("#searched").keyup(function () {
            $('.list-item').each(function () {
                let firstLiText = $(this).text().substring(1);
                let currentWord = $('#searched').val();

                if (!firstLiText.startsWith(currentWord)) {
                    $(this).hide();
                }else{
                    $(this).show();
                }
            });




        });
        // test

        // searches are case sensitive
        if (caseSensitive === true) {

        } else {
            $(".items-list").hide();

        }
    }
}
