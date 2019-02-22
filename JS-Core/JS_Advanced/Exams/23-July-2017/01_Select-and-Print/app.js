function move(command) {

    if (command === 'right') {
        moveToRight();
    } else if (command === 'left') {
        moveToLeft();
    } else if (command === 'print') {
        print();
    }

    function moveToRight() {
        let selected = $('#available-towns option:selected');

        $('#selected-towns').append(selected);
        $('#available-towns option:selected').remove();
    }

    function moveToLeft() {
        let selected = $('#selected-towns option:selected');

        $('#available-towns').append(selected);
        $('#selected-towns option:selected').remove();
    }

    function print() {
        let towns = [];

        let selectedTowns = $('#selected-towns option');

        for (let town of selectedTowns) {
            let townText = town.textContent;
            towns.push(townText);
        }

        let text = towns.join('; ');
        $('#output').text(text);
    }
}
