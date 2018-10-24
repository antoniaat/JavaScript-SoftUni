function validate() {
    $('#submit')
        .click(function (e) {
            e.preventDefault();
            e.stopPropagation();
        })
        .click(validateForm);

    function validateForm() {
        let successfulValidation = true;
        usernameValidation();
        passwordsValidation();
        emailValidation();
        companyValidation();

        function usernameValidation() {
            const usernameRegex = /^([a-zA-Z0-9]{3,20})$/gm;
            let username = $('#username').val();

            if (usernameRegex.test(username)) {
                $('#username').css('border-color', '');
            } else {
                $('#username').css('border-color', 'red');
                successfulValidation = false;
            }
        }

        function passwordsValidation() {
            let passwordRegex = /^([a-zA-Z0-9_]{5,15})$/gm;
            let password = $('#password').val();
            let repeatedPassword = $('#confirm-password').val();

            if (passwordRegex.test(password)) {
                $('#password').css('border-color', '');
            } else {
                $('#password').css('border-color', 'red');
                successfulValidation = false;
            }

            passwordRegex = /^([a-zA-Z0-9_]{5,15})$/gm;

            if (passwordRegex.test(repeatedPassword)) {
                $('#confirm-password').css('border-color', '');
            } else {
                $('#confirm-password').css('border-color', 'red');
                successfulValidation = false;
            }

            if (password !== repeatedPassword) {
                $('#confirm-password').css('border-color', 'red');
                successfulValidation = false;
            } else {
                $('#confirm-password').css('border-color', '');
            }
        }

        function emailValidation() {
            const emailRegex = /.*\@.*\..*/gm;
            let email = $('#email').val();

            if (emailRegex.test(email)) {
                $('#email').css('border-color', '');
            } else {
                $('#email').css('border-color', 'red');
                successfulValidation = false;
            }
        }

        function companyValidation() {
            if ($('#company').prop('checked')) {
                $('#companyInfo').css('display', 'block');
                let companyNumber = +($('#companyNumber').val());

                if (companyNumber < 1000 || companyNumber > 9999) {
                    successfulValidation = false;
                    $('#companyNumber').css('border-color', 'red');
                } else {
                    $('#companyNumber').css('border-color', 'darkblue');
                }
            } else {
                $('#companyInfo').css('display', 'none');
            }
        }

        if (successfulValidation) {
            $('#valid').css('display', 'block');
        } else {
            $('#valid').css('display', 'none');
        }
    }
}