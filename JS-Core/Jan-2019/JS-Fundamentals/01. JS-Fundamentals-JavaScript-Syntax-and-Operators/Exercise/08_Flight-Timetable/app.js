function solve(arr) {

    let departure = arr[0];
    let town = arr[1];
    let time = arr[2];
    let flightNumber = arr[3];
    let gateNumber = arr[4];

    console.log(`${departure}: Destination - ${town}, Flight - ${flightNumber}, Time - ${time}, Gate - ${gateNumber}`);
}

solve(['Departures', 'London', '22:45', 'BR117', '42']);