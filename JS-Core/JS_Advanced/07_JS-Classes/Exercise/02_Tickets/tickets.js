function result(arr, sortingCriteria) {
    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        let currentTicket = arr[i];
        let ticketTokens = currentTicket.split('|');

        let destinationName = ticketTokens[0];
        let price = +ticketTokens[1];
        let status = ticketTokens[2];

        let newTicket = new Ticket(destinationName, price, status);
        tickets.push(newTicket);
    }

    let sortedTickets;

    if (sortingCriteria === 'destination') {
        sortedTickets = tickets.sort(sortByDestination);
    } else if (sortingCriteria === 'status') {
        sortedTickets = tickets.sort(sortByStatus);
    } else if (sortingCriteria === 'price') {
        sortedTickets = tickets.sort(sortByPrice);
    }

    return sortedTickets;

    function sortByDestination(a, b) {
        if (a.destination < b.destination)
            return -1;
        if (a.destination > b.destination)
            return 1;
        return 0;
    }

    function sortByStatus(a, b) {
        if (a.status < b.status)
            return -1;
        if (a.status > b.status)
            return 1;
        return 0;
    }

    function sortByPrice(a, b) {
        if (a.price < b.price)
            return -1;
        if (a.price > b.price)
            return 1;
        return 0;
    }
}

// console.log(solve(['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'destination'));

// console.log(solve(['Philadelphia|94.20|available',
//         'New York City|95.99|available',
//         'New York City|95.99|sold',
//         'Boston|126.20|departed'],
//     'status'
// ));

let resultArray = result(['Philadelphia|94.20|available'], 'status');
console.log(resultArray);