function attachEvents() {
    $('#submit').click(sendMessage);
    $('#refresh').click(refresh);

    function sendMessage() {
        let author = $('#author').val();
        let content = $('#content').val();
        let timestamp = Date.now();

        $.ajax({
            url: `https://messenger-c64fd.firebaseio.com/messenger.json`,
            type: 'POST',
            dataType: 'json',
            data: JSON.stringify({
                "author": author,
                "content": content,
                "timestamp": timestamp
            }),
            success: function () {
                refresh();
            },
        });
    }

    function refresh() {
        $.ajax({
            type: 'GET',
            dataType: 'json',
            url: `https://messenger-c64fd.firebaseio.com/messenger.json`,
            success: function (data) {
                for (let key in data) {
                    let current = data[key];

                    let author = current.author;
                    let content = current.content;

                    let currentMessage = $('#messages').text();
                    currentMessage += `${author}: ${content}\n`;
                    $('#messages').text(currentMessage);
                }
            },
        });
    }
}