function solve(input) {
    let obj = {};

    for(let el of input){
        let [town, population] = el.split(" <-> ");

        if (obj.hasOwnProperty(town)) {
            let currentValue = obj[town];
            obj[town] = currentValue + +population;
        }else {
            obj[town] = Number(population);
        }
    }
    for(let key in obj){
        console.log(`${key} : ${obj[key]}`);
    }
}
solve([ 
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000',
    'Montana <-> 20000',
]);