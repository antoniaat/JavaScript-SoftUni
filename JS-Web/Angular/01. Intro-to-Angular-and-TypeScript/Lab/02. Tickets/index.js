function solve(array, criteria) {
    var tickets = [];
    array.forEach(function (item, index) {
        // <destinationName>|<price>|<status>
        var ticket = item.split('|');
        var newTicket = {
            destination: ticket[0],
            price: ticket[1],
            status: ticket[2]
        };
        tickets.push(newTicket);
    });
    tickets = tickets.sort(criteria);
    tickets.forEach(function (item, index) {
        console.log("Ticket {\n            destination: '" + item.destination + "',\n            price: '" + item.price + "',\n            status: '" + item.status + "'");
    });
}
solve(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'], 'destination');
