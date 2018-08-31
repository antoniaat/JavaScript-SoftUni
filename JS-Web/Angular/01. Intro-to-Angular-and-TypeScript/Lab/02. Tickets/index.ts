function solve(array, criteria) {

    let tickets = [];

    array.forEach((item, index) => {

        // <destinationName>|<price>|<status>
        let ticket = item.split('|');

        let newTicket = {
            destination: ticket[0],
            price: ticket[1],
            status: ticket[2]
        }

        tickets.push(newTicket);
    });

    tickets = tickets.sort(criteria);

    tickets.forEach((item, index) => {
        console.log(`Ticket {
            destination: '${item.destination}',
            price: '${item.price}',
            status: '${item.status}'`);
    })
}

solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination');