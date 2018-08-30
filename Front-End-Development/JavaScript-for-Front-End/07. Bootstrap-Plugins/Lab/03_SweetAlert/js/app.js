// Form validation and registering user
function attachEvent() {
    $('#submitBtn').click(registerUser);
    attachRemoveEvents();
    $('a').click(function (e) {
        e.preventDefault(); // Prevent the href from redirecting directly
        var linkURL = $(this).attr("href");
        warnBeforeRedirect(linkURL);
    });

    function registerUser(e) {
        warnBeforeSend();

        e.preventDefault();
        e.stopPropagation();

        let firstName = $('#firstName').val();
        let lastName = $('#lastName').val();
        let email = $('#exampleInputEmail1').val();

        let newUser = `${firstName} ${lastName} - ${email}`;

        let ul = $('.list-group');
        let li = $(`<li>${newUser}</li>`).addClass('list-group-item');
        let span = $('<span>x</span>').addClass('btn badge badge-danger badge-pill float-right');

        li.append(span);
        ul.append(li);

        attachRemoveEvents();
    }
}

function removeUser() {
    deleteAlert(this.parentNode);
}

function attachRemoveEvents() {
    $('span.badge').click(removeUser);
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

function deleteAlert(element) {
    swal({
            title: "Are you sure?",
            text: "You will not be able to recover this user!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel plx!",
            closeOnConfirm: false,
            closeOnCancel: false
        },
        function (isConfirm) {
            if (isConfirm) {
                swal("Deleted!", "The user has been deleted.", "success");
                console.log(this.parentNode);
                element.parentNode.removeChild(element);
            } else {
                swal("Cancelled", "The user is safe :)", "error");
            }
        });
}

attachEvent();
