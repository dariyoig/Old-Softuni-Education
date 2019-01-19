//First Solution
function solve(day, service, hour) {
    let dayOfWeek = (day) => ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].indexOf(day);

    let services = {
        'Fitness': (day, hour) => day <= 4 ? (hour <= 15 ? 5.00 : 7.50) : 8.00,
        'Sauna': (day, hour) => day <= 4 ? (hour <= 15 ? 4.00 : 6.50) : 7.00,
        'Instructor': (day, hour) => day <= 4 ? (hour <= 15 ? 10.00 : 12.50) : 15.00
    };

    return services[service](dayOfWeek(day), hour);
}




//Second Solution
function solve(day, service, time) {
    let price;
    switch (day) {
        case 'Monday':
            switch (service) {
                case 'Fitness':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 5.00;
                    } else {
                        price = 7.50;
                    }
                    break;
                case 'Sauna':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 4.00;
                    } else {
                        price = 6.50;
                    }
                    break;
                case 'Instructor':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 10.00;
                    } else {
                        price = 12.50;
                    }
                    break;
            }
            break;
        case 'Tuesday':
            switch (service) {
                case 'Fitness':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 5.00;
                    } else {
                        price = 7.50;
                    }
                    break;
                case 'Sauna':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 4.00;
                    } else {
                        price = 6.50;
                    }
                    break;
                case 'Instructor':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 10.00;
                    } else {
                        price = 12.50;
                    }
                    break;
            }
            break;
        case 'Wednesday':
            switch (service) {
                case 'Fitness':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 5.00;
                    } else {
                        price = 7.50;
                    }
                    break;
                case 'Sauna':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 4.00;
                    } else {
                        price = 6.50;
                    }
                    break;
                case 'Instructor':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 10.00;
                    } else {
                        price = 12.50;
                    }
                    break;
            }
            break;
        case 'Thursday':
            switch (service) {
                case 'Fitness':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 5.00;
                    } else {
                        price = 7.50;
                    }
                    break;
                case 'Sauna':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 4.00;
                    } else {
                        price = 6.50;
                    }
                    break;
                case 'Instructor':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 10.00;
                    } else {
                        price = 12.50;
                    }
                    break;
            }
            break;
        case 'Friday':
            switch (service) {
                case 'Fitness':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 5.00;
                    } else {
                        price = 7.50;
                    }
                    break;
                case 'Sauna':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 4.00;
                    } else {
                        price = 6.50;
                    }
                    break;
                case 'Instructor':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 10.00;
                    } else {
                        price = 12.50;
                    }
                    break;
            }
            break;
        case 'Saturday':
            switch (service) {
                case 'Fitness':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 8.00;
                    } else {
                        price = 8.00;
                    }
                    break;
                case 'Sauna':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 7.00;
                    } else {
                        price = 7.00;
                    }
                    break;
                case 'Instructor':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 15.00;
                    } else {
                        price = 15.0;
                    }
                    break;
            }
            break;
        case 'Sunday':
            switch (service) {
                case 'Fitness':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 8.00;
                    } else {
                        price = 8.00;
                    }
                    break;
                case 'Sauna':
                    if (time >= 8.00 && time <= 15.00) {
                        price = 7.00;
                    } else {
                        price = 7.00;
                    }
                    break;
                case 'Instructor':
                    if (time >= 8.00 && time < 15.00) {
                        price = 15.00;
                    } else {
                        price = 15.0;
                    }
                    break;
            }
            break;
    }
    console.log(price)
}