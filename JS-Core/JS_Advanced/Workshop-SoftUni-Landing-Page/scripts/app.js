(function attachEvents() {
    $('#bookHourBtn').click(addConsultation);

    function addConsultation(event) {
        event.stopPropagation();
        event.preventDefault();

        let validUsername = usernameValidation();
        let validLecturerName = lecturerValidation();
        let validInputFields = inputFieldsValidation();

        if (validInputFields && validLecturerName && validUsername) {
            $.notify("Added", "success");
            addNewConsultation();
        } else {
            $.notify("Try again", "warn");
        }
    }

    function addNewConsultation() {
        let lecturerName = $('#lecturer :selected').val().split(' ')[0];
        let dateAndTime = $('#datetimepicker').val().split(' ');

        let yearMonthDay = dateAndTime[0].split('/');
        let time = dateAndTime[1];
        let monthDay = `${yearMonthDay[1]}/${yearMonthDay[2]}`;

        let consultationText = `${lecturerName} - ${monthDay} - ${time}`;

        $('.education article:nth-child(3) .box-body ul')
            .append($(`<li><span>${consultationText}</span><i class="fas fa-chevron-circle-right"></i></li>`));

        let consultationsCountRef = $('.education article:nth-child(3) .box-footer span');
        let consultationsCountNumber = Number(consultationsCountRef.text());
        consultationsCountRef.text(++consultationsCountNumber);
    }

    function inputFieldsValidation() {
        let isValid = false;

        let username = $('#username').val();
        let date = $('#datetimepicker').val();

        if (username !== '' && date !== '') {
            isValid = true;
        }

        return isValid;
    }

    function lecturerValidation() {
        let isValid = false;

        let selectedLecturer = $('#lecturer :selected').val();
        if (selectedLecturer !== 'name') {
            isValid = true;
        }

        return isValid;
    }

    function usernameValidation() {
        let isValid = false;
        const regex = /^(([A-Za-z])([A-Za-z0-9_]{2,24}))$/gm;

        let username = $('#username').val();
        if (regex.test(username)) {
            isValid = true;
        }

        return isValid;
    }
}());