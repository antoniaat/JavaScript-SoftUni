function solve() {
    let buttons = document.getElementsByTagName('button');

    Array.from(buttons).forEach(btn => {
        btn.addEventListener('click', function () {

            let sender = this.name === 'myBtn' ? 'Me' : 'Pesho';
            let message;
            let position;
            let chatChronology = document.getElementById('chatChronology');

            if (sender === 'Me') {
                message = document.getElementById('myChatBox');
                position = 'left';
            } else {
                message = document.getElementById('peshoChatBox');
                position = 'right';
            }

            let div = document.createElement('div');
            let senderField = document.createElement('span');
            let messageField = document.createElement('p');

            senderField.textContent = sender;
            messageField.textContent = message.value;

            div.appendChild(senderField);
            div.appendChild(messageField);
            div.style.textAlign = position;

            chatChronology.appendChild(div);
            message.value = '';
        })
    })
}