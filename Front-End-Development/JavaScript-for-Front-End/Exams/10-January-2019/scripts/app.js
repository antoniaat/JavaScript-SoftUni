(function attachEvents() {

    $('.alert-container').css('display', 'none');
    $('#create-offers').css('display', 'none');

    let user = 'Anonymous';
    $('#loginBtn').click(login);


    function login() {
        console.log("fuck");


        let username = $(`#username`).val();
        let container = $('#usernameContainer');

        if (/\S/.test(username)) {
            if ($('#loginBtn').text() === 'Login') {

                if (username.length >= 10 && username.length <= 14) {
                    showNotification($('#successfulLoginNotify'));
                    $('#create-offers').css('display', 'block');

                    $('#loginBtn').text('Logout');
                    user = username;
                    let disabledInput = $(`<input class="form-control mr-sm-2 border-0 bg-light" type="search" placeholder="Hello, ${username}!" aria-label="Search" id="settedUsername" disabled="">`);
                    $('#username').remove();
                    container.prepend(disabledInput);
                } else {
                    showNotification($('#lengthValidationNotify'));
                }
            } else {
                showNotification($('#successfulLogoutNotify'));
                $('#create-offers').css('display', 'none');

                $('#loginBtn').text('Login');
                user = 'Anonymous';
                let input = $('<input class="form-control mr-sm-2" type="search" placeholder="Username" aria-label="Search" id="username">');
                $('#settedUsername').remove();
                container.prepend(input);
            }
        } else {
            showNotification($('#spaceValidationNotify'));
        }
    }

    function showNotification(notification) {
        notification.fadeTo(2000, 500).slideUp(500, function () {
            notification.slideUp(500);
        });
    }
    
    $('#create-offer-Btn').click(createOffer);
    
    function createOffer() {
        let positionName = $('#positionName').val();
        let company = $('#company').val();
        let description = $('#description').val();

        let card = `<div class="col-3">
            <div class="card text-white bg-info mb-3 pb-3" style="max-width: 18rem;">
                <div class="card-header">${positionName}</div>
                <div class="card-body">
                    <h5 class="card-title">${company}</h5>
                    <p class="card-text">${description}</p>
                </div>

                <button class="btn btn-outline-light w-50 font-weight-bold m-auto archive-Btn">
                    Archive
                </button>
            </div>
        </div>`;

        $('#offers-container').append(card);

        $('.archive-Btn:last-child').click(archiveOffer);
    }

    $('.archive-Btn:last-child').click(archiveOffer);

    function archiveOffer() {
        $(this).parent().remove();
    }
}());