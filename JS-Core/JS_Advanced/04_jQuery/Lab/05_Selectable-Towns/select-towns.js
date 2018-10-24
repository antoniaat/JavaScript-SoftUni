function attachEvents() {
    let allTowns = [];

    $('#items li')
        .click(selectedItem);

    function selectedItem() {
        if ($(this).hasClass('select')) {
            $(this).removeClass('select');
            $(this).css('background', '');
            let i = allTowns.indexOf($(this).text());
            if(i !== -1) {
                allTowns.splice(i, 1);
            }
        }

        else {
            $(this).addClass('select');
            $(this).css('background', '#DDD');
            allTowns.push($(this).text());
        }

        allTowns = allTowns.filter(filterCities);
    }

    // Print selected towns
    $('#showTownsButton').click(showTowns);

    function showTowns() {
        $('#selectedTowns').text(allTowns.join(', '));
    }
}

// Remove duplicated cities
function filterCities(value, index, self) {
    return self.indexOf(value) === index;
}