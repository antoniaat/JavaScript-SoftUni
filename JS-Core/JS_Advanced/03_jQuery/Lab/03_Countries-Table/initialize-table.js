function initializeTable() {
    $('#createLink').click(addCountry);
    $('.delete').click(deleteRow);
    $('.up').click(moveUp);
    $('.down').click(moveDown);

    function addCountry() {
        let name = $('#newCountryText').val();
        let capital = $('#newCapitalText').val();

        // Check if input fields are empty
        if (name !== '' && capital !== '') {
            createCountry(name, capital);
        }
        else {
            alert('Please fill all fields.')
        }
    }

    function createCountry(name, capital) {
        $('<tr>')
            .append($(`<td>${name}</td>`))
            .append($(`<td>${capital}</td>`))
            .append($(`<td>`)
                .append($('<a href="#" class="up"> [Up] </a>').click(moveUp))
                .append($('<a href="#" class="down"> [Down] </a>').click(moveDown))
                .append($('<a href="#"> [Delete] </a>').click(deleteRow))
            )
            .appendTo($('#countriesTable'));
        fixLinks();
    }

    // Create 3 default values
    createCountry('Bulgaria', 'Sofia');
    createCountry('Germany', 'Berlin');
    createCountry('Russia', 'Moscow');

    function fixLinks() {
        $('tr a').show();
        $('tr:nth-child(3) a.up').hide(); // Removes up option for first line
        $('tr:last-child a.down').hide(); // Removes down option for last line
    }

    function deleteRow() {
        $(this).parent().parent().remove();
        fixLinks();
    }

    function moveUp() {
        let row = $(this).parent().parent();
        row.insertBefore(row.prev());
        fixLinks();
    }

    function moveDown() {
        let row = $(this).parent().parent();
        row.insertAfter(row.next());
        fixLinks();
    }
}
