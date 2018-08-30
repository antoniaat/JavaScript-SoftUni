function attachEvents() {
    let user = 'Anonymous';
    let messagesContainer = $('#messages');

    $('#loginBtn').click(appendLog);
    $('#setUsername').click(setUsername);

    function setUsername() {
        let username = $(`#username`).val();
        let container = $('#usernameContainer');

        if (/\S/.test(username)) {
            if ($('#setUsername').text() === 'Set Username') {
                $(`#setUsername`).text('Logout');
                user = username;
                let p = $('<p class="font-weight-bold text-left pr-5" id="settedUsername">' + username + '</p>');
                $('#username').remove();
                container.append(p);
            } else {
                $('#setUsername').text('Set Username');
                user = 'Anonymous';
                let input = $('<input type="text" class="form-control " id="username" placeholder="Username...">');
                $('#settedUsername').remove();
                container.append(input);
            }
        }
    }

    function archive() {
        $(this).parent().remove();
        appendemptyMsg();
    }

    function appendLog() {
        let newContainerMsg;
        let msg = '';

        if ($("#successBtn").prop('checked') === true) {
            msg = `Success: ${$('#logMessage').val()}`;
            newContainerMsg = appendSuccessfulMsg();
        } else if ($("#infoBtn").prop('checked') === true) {
            msg = `Info: ${$('#logMessage').val()}`;
            newContainerMsg = appendInfoMsg();
        } else if ($("#errorBtn").prop('checked') === true) {
            msg = `Error: ${$('#logMessage').val()}`;
            newContainerMsg = appendErrorMsg();
        }

        let col1 = $('<div class="col-6" style="border-right: 1px solid black;"><h3 class="text-white">' + msg + '</h3></div>');
        let col2 = $('<div class="col-3 text-center"><h3 class="text-white" style="border-right: 1px solid black;">' + user + '</h3></div>');
        let col3 = $('<div class="col-3 text-center archiveBtn"><h3 class="text-white" >Archive</h3></div>');

        newContainerMsg.append(col1, col2, col3);
        messagesContainer.append(newContainerMsg);

        appendemptyMsg();
        $('.archiveBtn').on('click', archive);
    }

    function appendErrorMsg() {
        return $('<div class="row bg-danger p-3 font-weight-bold rounded text-left text-dark m-2"></div>');
    }

    function appendInfoMsg() {
        return $('<div class="row bg-info p-3 font-weight-bold rounded text-left text-dark m-2"></div>');
    }

    function appendSuccessfulMsg() {
        return $('<div class="row bg-success p-3 font-weight-bold rounded text-left text-dark m-2"></div>');
    }

    function appendemptyMsg() {
        if ($('#messages').children().length === 0) {
            $('#emptyDatabase').css('display', 'block');
        } else {
            $('#emptyDatabase').css('display', 'none');
        }
    }
}

function isBlank(str) {
    return (!str || /^\s*$/.test(str));
}

attachEvents();