function solve(day, service, hour) {
    let price;
    switch (day) {
        case 'Monday':
            switch (service) {
                case 'Fitness':
                    if (hour < 15) {
                        price = 5
                    } else {
                        price = 7.50
                    }
                    break;
                case 'Sauna':
                    if (hour <= 15) {
                        price = 4
                    } else {
                        price = 6.50
                    }
                    break;
                case 'Instructor':
                    if (hour <= 15) {
                        price = 10
                    } else {
                        price = 12.5
                    }
                    break;
            }
            break;
        case 'Tuesday':
            switch (service) {
                case 'Fitness':
                    if (hour <= 15) {
                        price = 5
                    } else {
                        price = 7.50
                    }
                    break;
                case 'Sauna':
                    if (hour < 15) {
                        price = 4
                    } else {
                        price = 6.50
                    }
                    break;
                case 'Instructor':
                    if (hour < 15) {
                        price = 10
                    } else {
                        price = 12.5
                    }
                    break;
            }
            break;
        case 'Wednesday':
            switch (service) {
                case 'Fitness':
                    if (hour <= 15) {
                        price = 5
                    } else {
                        price = 7.50
                    }
                    break;
                case 'Sauna':
                    if (hour < 15) {
                        price = 4
                    } else {
                        price = 6.50
                    }
                    break;
                case 'Instructor':
                    if (hour < 15) {
                        price = 10
                    } else {
                        price = 12.5
                    }
                    break;
            }
            break;
        case 'Thursday':
            switch (service) {
                case 'Fitness':
                    if (hour <= 15) {
                        price = 5
                    } else {
                        price = 7.50
                    }
                    break;
                case 'Sauna':
                    if (hour < 15) {
                        price = 4
                    } else {
                        price = 6.50
                    }
                    break;
                case 'Instructor':
                    if (hour < 15) {
                        price = 10
                    } else {
                        price = 12.5
                    }
                    break;
            }
            break;
        case 'Friday':
            switch (service) {
                case 'Fitness':
                    if (hour <= 15) {
                        price = 5
                    } else {
                        price = 7.50
                    }
                    break;
                case 'Sauna':
                    if (hour < 15) {
                        price = 4
                    } else {
                        price = 6.50
                    }
                    break;
                case 'Instructor':
                    if (hour < 15) {
                        price = 10
                    } else {
                        price = 12.5
                    }
                    break;
            }
            break;
        case 'Saturday':
            switch (service) {
                case 'Fitness':
                    price = 8;
                    break;
                case 'Sauna':
                    price = 7;
                    break;
                case 'Instructor':
                    price = 15;
                    break;
            }
            break;
        case 'Sunday':
            switch (service) {
                case 'Fitness':
                    price = 8;
                    break;
                case 'Sauna':
                    price = 7;
                    break;
                case 'Instructor':
                    price = 15;
                    break;
            }
            break;
    }
    console.log(price);
}