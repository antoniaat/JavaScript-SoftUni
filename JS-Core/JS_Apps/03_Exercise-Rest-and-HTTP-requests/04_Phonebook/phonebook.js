function attachEvents() {
    $('#btnLoad').click(load);
    $('#btnCreate').click(addPerson);

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
                console.log("yey");
            },
        });
    }

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

                    let listItem = $(`<li>${person}: ${phone} <button class="delete">[Delete]</button></li>`);

                    $('#phonebook').append(listItem);
                }

                $('.delete:last-child').click(deletePhone);
            }
        });
    }

    function deletePhone(key) {
        let clickedUser = $(this).parent().text();

        $.ajax({
            url: `https://phonebook-nakov.firebaseio.com/phonebook/${key}.json`,
            type: 'DELETE',
            success: function (data) {

            }
        });
    }

}