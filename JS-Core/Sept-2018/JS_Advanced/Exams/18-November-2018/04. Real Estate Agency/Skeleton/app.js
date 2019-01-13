function realEstateAgency() {
    $('#regOffer button[name=regOffer]').click(registerOffer);

    $('#findOffer button[name=findOffer]').click(findOffer);

    $('.moveOut').click(moveOutFamily);

    function findOffer() {
        // e.preventDefault();

        let familyBudget = $('input[name=familyBudget]').val();
        let familyApartmentType = $('input[name=familyApartmentType]').val();
        let familyName = $('input[name=familyName]').val();

        let offerValidation = !isNaN(familyBudget)
            && familyBudget > 0
            && familyApartmentType !== ''
            && familyApartmentType !== ' '
            && familyName !== ''
            && familyName !== ' ';

        if (offerValidation) {
            if (searchAnOffer(familyApartmentType, familyBudget, familyName)) {
                printMessage('Enjoy your new home! :)))');
            } else {
                printMessage('We were unable to find you a home, so sorry :(');
            }

        } else {
            printMessage('Your offer registration went wrong, try again.');
        }
    }

    function searchAnOffer(familyApartmentType, familyBudget, familyName) {
        let findApartment = false;

        // Foreach all apartments
        let allApartments = $('.apartment');

        for (const currentApartment of allApartments) {
            let rent = ($(currentApartment).children('p:nth-child(1)')).text();
            let type = ($(currentApartment).children('p:nth-child(2)')).text();
            let commission = ($(currentApartment).children('p:nth-child(3)')).text();

            let rentInMoney = +(rent.replace('Rent: ', ''));
            let commissionInMoney = +(commission.replace('Commission: ', ''));
            let enoughRent = familyBudget >= (rentInMoney + (rentInMoney * commissionInMoney) / 100);

            if (type === `Type: ${familyApartmentType}` && enoughRent) {
                increaseAgencyProfit(rentInMoney);
                moveTheFamily(familyName, currentApartment);
                $('.moveOut').click(moveOutFamily);

                findApartment = true;
            }
        }

        return findApartment;
    }

    function moveTheFamily(familyName, currentApartment) {
        $(currentApartment).children('p:nth-child(1)').text(familyName);
        $(currentApartment).children('p:nth-child(2)').text('live here now');
        $(currentApartment).children('p:nth-child(3)').remove();

        $(currentApartment).append($('<button class="moveOut">MoveOut</button>'));
        $(currentApartment).css('border', '2px solid red');
    }

    function increaseAgencyProfit(rentInMoney) {
        // <h1>Agency profit: 0 lv.</h1>
        let currentMoney = +($('#roof h1')
            .text()
            .replace('Agency profit: ', '')
            .replace(' lv.', ''));

        currentMoney += rentInMoney;

        $('#roof h1').text(`Agency profit: ${currentMoney} lv.`)
    }

    function registerOffer(e) {
        e.preventDefault();

        let apartmentRent = $('input[name=apartmentRent]').val();
        let apartmentType = $('input[name=apartmentType]').val();
        let agencyCommission = $('input[name=agencyCommission]').val();

        let offerValidation = !isNaN(apartmentRent)
            && !isNaN(agencyCommission)
            && apartmentRent > 0
            && agencyCommission >= 0
            && agencyCommission <= 100
            && apartmentType !== ''
            && apartmentType !== ' '
            && !apartmentType.includes(':');

        // Clear all input fields
        $('#offerManager input').val('');

        if (offerValidation) {
            postNewOffer(apartmentRent, apartmentType, agencyCommission);
            printMessage('Your offer was created successfully.');
        } else {
            printMessage('Your offer registration went wrong, try again.');
        }
    }

    function printMessage(message) {
        $('#message').text(message);
    }

    function postNewOffer(apartmentRent, apartmentType, agencyCommission) {
        let apartment = $('<div class="apartment"></div>')

        let rent = $('<p></p>');
        rent.text(`Rent: ${apartmentRent}`);
        let type = $('<p></p>');
        type.text(`Type: ${apartmentType}`);
        let commission = $('<p></p>');
        commission.text(`Commission: ${agencyCommission}`);

        apartment.append(rent);
        apartment.append(type);
        apartment.append(commission);

        $('#building').append(apartment);
    }

    function moveOutFamily() {
        let selectedFamily = $(this).parent();
        let familyName = $(selectedFamily).children('p:nth-child(1)').text();

        selectedFamily.remove();
        printMessage(`They had found cockroaches in ${familyName}\'s apartment`);
    }
}
