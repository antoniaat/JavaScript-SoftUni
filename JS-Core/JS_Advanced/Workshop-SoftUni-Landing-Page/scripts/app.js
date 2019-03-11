(function attachEvents() {
    $('#bookHourBtn').click(addConsultation);

    function addConsultation(event) {
        event.preventDefault();
        event.stopPropagation();

        let validUsername = usernameValidation();
        let validLecturerName = lecturerValidation();
        let filledInputFields = filledInputFieldsValidation();

        if (validUsername && validLecturerName && filledInputFields) {
            $.notify("Consultation added", "success");
            addNewConsultation();
        } else {
            $.notify("Try again", "error");
        }
    }

    function addNewConsultation() {
        let lecturerName = $('#lecturer option:selected').val();
        let dateAndTime = $('#datetimepicker').val().split(' ');
        let yearMonthDay = dateAndTime[0].split('/');
        let monthDay = `${yearMonthDay[1]}/${yearMonthDay[2]}`;

        let time = dateAndTime[1];

        $('.education article:nth-child(3) .box-body ul')
            .append(`<li><span>${lecturerName} - ${monthDay} - ${time}</span><i class="fas fa-chevron-circle-right"></i></li>`);

        increaseConsultationsCount();
    }

    function increaseConsultationsCount() {
        let consultationsCount = $('.education article:nth-child(3) .box-footer span');
        let currentCount = consultationsCount.text();
        consultationsCount.text(++currentCount);
    }

    function filledInputFieldsValidation() {
        let isValid = false;

        let dateTimeInputField = $('#datetimepicker').val();
        if (dateTimeInputField !== '') {
            isValid = true;
        }

        return isValid;
    }

    function lecturerValidation() {
        let isValid = false;

        let selectedOption = $('#lecturer option:selected').val();
        if (selectedOption !== 'name') {
            isValid = true;
        }

        return isValid;
    }

    function usernameValidation() {
        let isValid = false;
        const regex = /^([A-Za-z])([A-Za-z0-9_]{2,24})$/gm;

        let username = $('#username').val();
        if (regex.test(username)) {
            isValid = true;
        }

        return isValid;
    }
}());