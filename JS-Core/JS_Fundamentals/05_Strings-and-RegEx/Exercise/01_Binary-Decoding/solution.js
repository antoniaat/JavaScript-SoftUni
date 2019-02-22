function solve() {
    let messageSign = document.getElementById("str").value;
    let text = document.getElementById("text").value;
    let divResult = $('#result');

    function printDecriptedMessage(messageSign, text) {
        let pattern = /(north|east)[\s\S]*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gim;
        let mesagePattern = new RegExp(`${messageSign}([\\s\\S]*)${messageSign}`, 'gim');

        let north = '';
        let east = '';

        let currnetMatch = pattern.exec(text);
        while (currnetMatch) {
            if (currnetMatch[1].toLowerCase() === 'north') {
                north = `${currnetMatch[2]}.${currnetMatch[3]} N`;
            } else {
                east = `${currnetMatch[2]}.${currnetMatch[3]} E`;
            }

            currnetMatch = pattern.exec(text);
        }

        let messageContent = 'Message: ' + mesagePattern.exec(text)[1];

        let pNorth = $('<p>');
        let pEast = $('<p>');
        let pMessage = $('<p>');

        divResult.append(pNorth.text(north)).append(pEast.text(east)).append(pMessage.text(messageContent));

    }
    printDecriptedMessage(messageSign, text);

}