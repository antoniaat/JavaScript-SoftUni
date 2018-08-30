function attachEvents() {
    let allTowns = [];

    $('#items li')
        .click(selectedItem);

    function selectedItem() {
        if ($(this).hasClass('select')) {
            $(this).removeClass('select');
            $(this).css('background', '');
            let i = allTowns.indexOf($(this).text());
            if (i !== -1) {
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

// Similar solution >

//
// function attachEvents() {
//     $('#items li').on('click', select);
//
//     function select() {
//         if($(this).attr('data-selected')){
//             $(this).removeAttr('data-selected');
//             $(this).css('background', "");
//         } else {
//             $(this).attr("data-selected", true);
//             $(this).css('background',"#DDD");
//         }
//     }
//
//     $('#showTownsButton').on('click', function () {
//         $('#selectedTowns').text($('#items li[data-selected]').toArray().map(li => li.textContent).join(', '));
//     })
// }