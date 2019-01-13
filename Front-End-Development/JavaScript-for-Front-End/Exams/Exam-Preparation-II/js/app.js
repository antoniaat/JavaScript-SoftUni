let userObject = {
    username: null
};

let logsObject = {
    count: 0
};

function login() {
    $('#user-data-container').empty();

    $('#user-data-container')
        .append('<h4 id="usernameHolder" class="text-center col-md-7">' + userObject.username + '</h4>')
        .append('<button id="unsetUsernameButton" class="btn btn-dark text-white col-md-4 ml-4">Logout</button>')

    attachUserEvents();
}

function logout() {
    $('#user-data-container').empty();

    $('#user-data-container')
        .append('<input type="text" id="username" class="form-control col-md-7" placeholder="Username...">')
        .append('<button id="setUsernameButton" class="btn btn-dark text-white col-md-4 ml-4">Set Username</button>')

    attachUserEvents();
}

function clearForm() {
    let logMessage = $('#logMessage').val('');
    let logStatus = $('input[name="status"]:checked').prop('checked', false);
    $('input[id="infoRadio"]').prop('checked', true);
}

function formatMessage(message, status) {
    let messageCaption = status === 'success'
        ? 'Success: '
        : (status === 'info' ? 'Info: ' : 'Error: ');

    let formattedMessage = messageCaption + message;

    return $('<h4 class="col-md-6 border-right border-dark mt-2">' + formattedMessage + '</h4>')
}

function formatLogger(user) {
    let logger = userObject.username != null
        ? userObject.username
        : 'Anonymous';

    return $('<h4 class="col-md-3 border-left border-right border-dark mt-2 text-center">' + logger + '</h4>');
}

function formatArchive() {
    return $('<h4 class="col-md-3 border-left border-left border-dark mt-2 text-center archive">Archive</h4>');
}

function log(user, message, status) {
    clearForm();

    if (logsObject.count == 0) {
        $('.logs').empty();
    }

    let background = status === 'success' ? 'bg-success' : (status === 'info' ? 'bg-info' : 'bg-danger');
    let log = $('<div class="log row mx-auto w-75 mt-1 border p-1 rounded-bottom rounded-top ' + background + ' text-light">');
    let logMessage = formatMessage(message, status);
    let logLogger = formatLogger(user);
    let logArchive = formatArchive();

    log
        .append(logMessage)
        .append(logLogger)
        .append(logArchive);

    $('.logs').append(log);

    attachArchiveEvents();

    logsObject.count++;
}

function attachUserEvents() {
    $('#setUsernameButton').click(function (e) {
        e.preventDefault();

        userObject.username = $('#username').val();

        if (userObject.username == null
            || userObject.username.length === 0) {
            return;
        }

        login();
    });

    $('#unsetUsernameButton').click(function (e) {
        e.preventDefault();
        console.log('asd');
        userObject.username = null;
        logout();
    });
}

function attachLogEvents() {
    $('#logButton').click(function (e) {
        e.preventDefault();

        let logMessage = $('#logMessage').val();
        let logStatus = $('input[name="status"]:checked').val()
        log(userObject.username, logMessage, logStatus);
    });
}

function attachArchiveEvents() {
    $('.archive:last').click(function (e) {
        $(this).parent().remove();
        logsObject.count--;

        if(logsObject.count == 0) {
            $('.logs').append('<h2 class="text-center text-muted">There are currently no logs in the database...</h2>');
        }
    });
}

attachUserEvents();
attachLogEvents();