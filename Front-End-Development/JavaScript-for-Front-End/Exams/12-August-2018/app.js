function attachElementEvents() {
    $('#firstName').click(function (e) {
        $(this).parent()
            .append('<input type="text" id="firstNameInput" class="form-control text-center" placeholder="First Name..." value="'
                + $(this).text()
                + '"/>');
        $(this).remove();
        attachInputEvents();
    });

    $('#lastName').click(function (e) {
        $(this).parent()
            .append('<input type="text" id="lastNameInput" class="form-control text-center" placeholder="Last Name..." value="'
                + $(this).text()
                + '"/>');
        $(this).remove();
        attachInputEvents();
    });
    
    $('#phoneNumber').click(function (e) {
        $(this).parent()
            .append('<input type="text" pattern="[\d-]+" id="phoneNumberInput" class="form-control text-center" placeholder="Phone Number..." value="'
                + $(this).text()
                + '"/>');
        $(this).remove();
        attachInputEvents();
    });

    $('#ucl').click(function (e) {
        $(this).parent()
            .append('<input type="number" id="uclInput" class="form-control text-center" placeholder="Unique Citizen Number..." max="9999999999" value="'
                + $(this).text()
                + '"/>');
        $(this).remove();
        attachInputEvents();
    });
}

function attachInputEvents() {
    $('#firstNameInput').keypress(function (e) {
        if(e.which == 13) {
            $(this).parent()
                .append('<h5 id="firstName" class="text-gray-dark text-center">'
                    + $(this).val()
                    + '</h5>');
            $(this).remove();
            attachElementEvents();
        }
    });

    $('#lastNameInput').keypress(function (e) {
        if(e.which == 13) {
            $(this).parent()
                .append('<h5 id="lastName" class="text-gray-dark text-center">'
                    + $(this).val()
                    + '</h5>');
            $(this).remove();
            attachElementEvents();
        }
    });

    $('#phoneNumberInput').keypress(function (e) {
        if(e.which == 13) {
            $(this).parent()
                .append('<h5 id="phoneNumber" class="text-gray-dark text-center">'
                    + $(this).val()
                    + '</h5>');
            $(this).remove();
            attachElementEvents();
        }
    });

    $('#uclInput').keypress(function (e) {
        if(e.which == 13) {
            $(this).parent()
                .append('<h5 id="ucl" class="text-gray-dark text-center">'
                    + $(this).val()
                    + '</h5>');
            $(this).remove();
            attachElementEvents();
        }
    });
}

let checkBoxHtmlPlaceholder =
    '<div class="form-check form-check-inline">'
    + '<input class="form-check-input mt-2" type="radio" name="position" id="{position}Radio" value="{position}">'
    + '<label class="form-check-label mb-1" for="{position}Radio">{positionCap}</label>'
    + '</div>';

function attachRadioEvents() {
    $('#supportRadio').click(function (e) {
        $('#positionHolder')
            .empty()
            .append(checkBoxHtmlPlaceholder
                .replace('{position}', 'techSupport')
                .replace('{positionCap}', 'Tech Support'))
            .append(checkBoxHtmlPlaceholder
                .replace('{position}', 'medicalSupport')
                .replace('{positionCap}', 'Medical Support'))
            .append(checkBoxHtmlPlaceholder
                .replace('{position}', 'assistant')
                .replace( '{positionCap}', 'Assistant Support'));
    });

    $('#crmRadio').click(function (e) {
        $('#positionHolder')
            .empty()
            .append(checkBoxHtmlPlaceholder
                .replace('{position}', 'communityManager')
                .replace('{positionCap}', 'Community Manager'))
            .append(checkBoxHtmlPlaceholder
                .replace('{position}', 'customerCareManager')
                .replace('{positionCap}', 'Customer Care Manager'))
            .append(checkBoxHtmlPlaceholder
                .replace('{position}', 'leadAdministrativeOfficer')
                .replace('{positionCap}', 'Lead Administrative Officer'));
    });

    $('#marketingRadio').click(function (e) {
        $('#positionHolder')
            .empty()
            .append(checkBoxHtmlPlaceholder
                .replace('{position}', 'prManager')
                .replace('{positionCap}', 'PR Manager'))
            .append(checkBoxHtmlPlaceholder
                .replace('{position}', 'socialMediaManager')
                .replace('{positionCap}', 'Social Media Manager'))
            .append(checkBoxHtmlPlaceholder
                .replace('{position}', 'marketingSpecialist')
                .replace('{positionCap}', 'Marketing Specialist'));
    });

    $('#developmentRadio').click(function (e) {
        $('#positionHolder')
            .empty()
            .append(checkBoxHtmlPlaceholder
                .replace('{position}', 'juniorDev')
                .replace('{positionCap}', 'Junior Developer'))
            .append(checkBoxHtmlPlaceholder
                .replace('{position}', 'regularDev')
                .replace('{positionCap}', 'Regular Developer'))
            .append(checkBoxHtmlPlaceholder
                .replace('{position}', 'seniorDev')
                .replace('{positionCap}', 'Senior Developer'));
    });

    $('#otherRadio').click(function (e) {
        $('#positionHolder')
            .empty()
            .append(checkBoxHtmlPlaceholder
                .replace('{position}', 'teamLead')
                .replace('{positionCap}', 'Team Lead'))
            .append(checkBoxHtmlPlaceholder
                .replace('{position}', 'regularEmployee')
                .replace('{positionCap}', 'Regular Employee'))
            .append(checkBoxHtmlPlaceholder
                .replace('{position}', 'intern')
                .replace('{positionCap}', 'Intern'));
    });
}

attachElementEvents();
attachRadioEvents();