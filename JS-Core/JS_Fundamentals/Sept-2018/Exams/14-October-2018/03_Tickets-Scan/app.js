function solve(message, command) {
    const passengerTwoNamesPattern = /( )([A-Z][A-Za-z]*)-([A-Z][A-Za-z]*)( )/gm;
    const passengerThreeNamesPattern = /( )([A-Z][A-Za-z]*)-([A-Z][A-Za-z]*)\.-([A-Z]+[A-Za-z]*)( )/gm;
    const airportPattern = /( )(([A-Z]{3})\/([A-Z]{3}))( )/gm;
    const flightNumberPattern = /( )([A-Z]{1,3})([0-9]{1,5})( )/gm;
    const companiesPattern = /(- )([A-Z][A-Za-z]*)\*([A-Z][A-Za-z]*)( )/gm;

    if (command === 'name') {
        let name = matchPassengerNames(message);

        if (name) {
            console.log(`Mr/Ms, ${name}, have a nice flight!`);
        } else {
            console.log('INVALID');
        }
    } else if (command === 'flight') {
        let flight = matchFlightNumber(message);
        let airportNames = matchAirport(message);

        if (flight && airportNames) {
            console.log(`Your flight number ${flight} is from ${airportNames[0]} to ${airportNames[1]}.`);
        } else {
            console.log('INVALID');
        }
    } else if (command === 'company') {
        let companyName = matchCompanyName(message);

        if (companyName) {
            console.log(`Have a nice flight with ${companyName}.`);
        } else {
            console.log('INVALID');
        }
    } else if (command === 'all') {
        let information = allPatterns(message);
        let name = information[0];
        let flightNumber = information[1];
        let fromAirport = information[2];
        let toAirport = information[3];
        let companyName = information[4];

        if (information) {
            console.log(`Mr/Ms, ${name}, your flight number ${flightNumber} is from ${fromAirport} to ${toAirport}. Have a nice flight with ${companyName}.`);
        } else {
            console.log('INVALID');
        }
    }

    function allPatterns(message) {
        let information = [];

        let name = matchPassengerNames(message);

        if (name) {
            information.push(name
                .replace('-', ' ')
                .trim());
        } else {
            return false;
        }

        let flight = matchFlightNumber(message);
        let airportNames = matchAirport(message);

        if (flight && airportNames) {
            information.push(flight, airportNames[0], airportNames[1]);
        } else {
            return false;
        }

        let companyName = matchCompanyName(message);

        if (companyName) {
            information.push(companyName
                .replace('*', ' ')
                .replace('-', ' ')
                .trim());
        } else {
            return false;
        }

        return information;
    }

    function matchCompanyName(message) {
        let matchCompany = false;
        let companyName;

        let matches = companiesPattern.exec(message);

        if (matches) {
            companyName = matches[0]
                .replace('*', ' ')
                .replace('-', ' ')
                .trim();

            matchCompany = true;
        }

        companiesPattern.exec();

        if (matchCompany) {
            return companyName;
        }
    }

    function matchFlightNumber(message) {
        let matchFlight = false;
        let flightName;

        let matches = flightNumberPattern.exec(message);

        if (matches) {
            flightName = matches[0]
                .trim();
            matchFlight = true;
        }

        flightNumberPattern.exec();

        if (matchFlight) {
            return flightName;
        }
    }

    function matchAirport(message) {
        let matchAirport = false;
        let airportNames = [];

        let matches = airportPattern.exec(message);

        if (matches) {
            airportNames.push(matches[3]);
            airportNames.push(matches[4]);
            matchAirport = true;
        }

        airportPattern.exec();

        if (matchAirport) {
            return airportNames;
        }
    }

    function passengerWithTwoNamesCheck(message) {
        let matchName = false;
        let fullPassengerName;

        let matches = passengerTwoNamesPattern.exec(message);

        if (matches) {
            fullPassengerName = matches[0]
                .replace('-', ' ')
                .trim();
            matchName = true;
        }

        passengerTwoNamesPattern.exec();

        if (matchName) {
            return fullPassengerName;
        }
    }

    function passengerWithThreeNamesCheck(message) {
        let matchName = false;
        let fullPassengerName;

        let matches = passengerThreeNamesPattern.exec(message);

        if (matches) {
            fullPassengerName = matches[0]
                .replace(new RegExp('-', 'g'), ' ')
                .trim();
            matchName = true;
        }

        passengerThreeNamesPattern.exec();

        if (matchName) {
            return fullPassengerName;
        }
    }

    function matchPassengerNames(message) {
        let passengerWithTwoNames = passengerWithTwoNamesCheck(message);
        let passengerWithThreeNames = passengerWithThreeNamesCheck(message);

        if (passengerWithTwoNames) {
            return passengerWithTwoNames;
        } else if (passengerWithThreeNames) {
            return passengerWithThreeNames;
        }
    }
}

// let test0 = 'ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45' +
//     '  STA09:35 ', 'all';

let test1 =
    [' TEST-T.-TESTOV   SOF/VIE OS806 - Austrian*Airlines T24G55 STD11:15 STA11:50 ', 'flight'];

let test2 =
    [' P-Pes.ov travvels from FED/RFE - Bg*Airline E32R  F78C72  from STD12:34 arriving at STA10:23 ', 'all'];

solve('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45' +
    '  STA09:35 ', 'all');