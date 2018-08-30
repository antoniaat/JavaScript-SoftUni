function attachEvent() {
    $('#submitBtn').click(submit);

    $('.hyperlink-notification').click(function (e) {
        e.preventDefault(); // Prevent the href from redirecting directly
        var linkURL = $(this).attr("href");
        warnBeforeRedirect(linkURL);
    });

    function submit(e) {
        warnBeforeSend();
        e.preventDefault();
        e.stopPropagation();

        // Clear input fields
        $('input').val('');
        $('.dropify-clear').click();
    }
}

// SweetAlert Notifications
function warnBeforeRedirect(linkURL) {
    swal({
        title: "Leave this site?",
        text: "If you click 'OK', you will be redirected to " + linkURL,
        type: "warning",
        showCancelButton: true
    }, function () {
        // Redirect the user
        window.location.href = linkURL;
    });
}

function warnBeforeSend() {
    swal("Good job!", "You are registered!", "success")
}

attachEvent();

$('.dropify').dropify();

