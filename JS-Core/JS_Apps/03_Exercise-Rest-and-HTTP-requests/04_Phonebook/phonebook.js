function attachEvents() {
    $('#btnLoad').click(load);
    $('#btnCreate').click(addPerson);

    function load() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: `https://phonebook-nakov.firebaseio.com/phonebook.json`,
            success: function (data) {
                $('#phonebook').empty();

                for (let key in data) {
                    let person = data[key].person;
                    let phone = data[key].phone;

                    let listItem = $(`<li>${person}: ${phone} <button class="delete" id='${key}'>[Delete]</button></li>`);

                    $('#phonebook').append(listItem);
                }

                $('.delete:last-child').click(deletePhone);
            }
        });
    }

    function addPerson() {
        let personName = $('#person').val();
        let phone = $('#phone').val();

        $.ajax({
            url: `https://phonebook-nakov.firebaseio.com/phonebook.json`,
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({
                "person": personName,
                "phone": phone
            }),
            success: function () {
                // Empty input fields
                $('#person').val('');
                $('#phone').val('');
            },
        });

        load();
    }

    function deletePhone() {
        let clickedUserId = $(this).attr('id');

        $.ajax({
            url: `https://phonebook-nakov.firebaseio.com/phonebook/${clickedUserId}.json`,
            type: 'DELETE',
            success: function () {
                console.log("The user is deleted.");
                load();

            }
        });

    }
}