function solve(input) {
    let obj = {};

    for (let el of input) {
        let [city, product, price] = el.split(" | ");
        if (obj.hasOwnProperty(product) && obj[product].includes(city)) {
            
        }else if (obj.hasOwnProperty(product)) {
            let currentPrice = obj[product][0];
            if (+price < currentPrice) {
                obj[product] = [+price, city]
            }
        } else {
            obj[product] = [+price, city];
        }

    }
    for (let key in obj) {
        console.log(`${key} -> ${obj[key][0]} (${obj[key][1]})`);
    }
}
solve([
    'Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);