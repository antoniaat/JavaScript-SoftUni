function search() {
    let target = $('#searchText').val();
    let allListItems = $("#towns li");
    allListItems.css("font-weight", "normal");

    let listItems = $("#towns li:contains('" + target + "')")
        .css("font-weight", "bold");

    let count = listItems.length;
    $('#result').text(`${count} matches found`);
}