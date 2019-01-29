function solve() {
    let input = document.getElementById("str").value;

    let divResult = $('#result')[0];

    function ticketScan(input, command) {
        let namePattern = /( [A-Z][A-Za-z]*\-[A-Z][A-Za-z]*\.\-[A-Z][A-Za-z]* )|( [A-Z][A-Za-z]*\-[A-Z][A-Za-z]* )/g;
        let airportPattern = / ([A-Z]{3})\/([A-Z]{3}) /g;
        let flightPattern = / [A-Z]{1,3}[\d]{1,5} /g;
        let companyPattern = /(- [A-Z][A-Za-z]*)\*[A-Z][A-Za-z]* /g;
        let nameMatch = input.match(namePattern);
        let name = nameMatch.toString().replace(/\-/g, ' ').trim();

        let airports = airportPattern.exec(input);
        let airportFrom = airports[1];
        let airportTo = airports[2];

        let flight = input.match(flightPattern);
        let companyName = input.match(companyPattern);
        let company = companyName.toString().replace(/\-/g, '').replace('*', ' ').trim();

        if (command === 'name') {
            divResult.innerHTML = `Mr/Ms, ${name}, have a nice flight!`;
        } else if (command === 'flight') {
            divResult.innerHTML = `Your flight number ${flight[0].trim()} is from ${airportFrom} to ${airportTo}.`
        } else if (command === 'company') {
            divResult.innerHTML = `Have a nice flight with ${company}.`
        } else if (command === 'all') {
            divResult.innerHTML = `Mr/Ms, ${name}, your flight number ${flight[0].trim()} is from ${airportFrom} to ${airportTo}. Have a nice flight with ${company}.`
        }
    }

    ticketScan(input.split(", ")[0], input.split(", ")[1]);
}