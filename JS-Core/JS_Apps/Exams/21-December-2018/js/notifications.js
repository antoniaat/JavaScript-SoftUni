const notifications = {};

$(() => {
    // Notifications
    $('#infoBox').click((event) => $(event.target).hide());
    $('#errorBox').click((event) => $(event.target).hide());

    let loading = 0;
    $(document).on({
        ajaxStart: () => {
            if (loading === 0) $('#loadingBox').show();
            loading++;
            console.log(loading);
        },
        ajaxStop: () => {
            loading--;
            setTimeout(() => {if (loading === 0) $('#loadingBox').fadeOut()}, 400);
            console.log(loading);
        }
    });

    notifications.showInfo = function (message) {
        $('#infoBox').text(message);
        $('#infoBox').show();
        setTimeout(() => $('#infoBox').fadeOut(), 3000);
    };

    notifications.showError = function (message) {
        $('#errorBox').text(message);
        $('#errorBox').show();
    };

    notifications.handleError = function (reason) {
        showError(reason.responseJSON.description);
    };
});
