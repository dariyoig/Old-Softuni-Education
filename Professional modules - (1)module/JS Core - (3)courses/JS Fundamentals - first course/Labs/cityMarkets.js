function solve(input) {
    let obj = {};
    for (const el of input) {
        let [town, product, money] = el.split(" -> ");
        let exist = obj.hasOwnProperty(town);
        if (exist) {
            obj[town][product] = getSum(money);
        } else {
            obj[town]= {[product]: getSum(money)}
        }

    }
    for (const town in obj) {
        console.log(`Town - ${town}`);
        for(let product in obj[town]){
            console.log(`$$$${product} : ${obj[town][product]}`);
        }
    }


    function getSum(string) {
        let [quantity, price] = string.split(" : ");
        return quantity * price;
    }
}
solve([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'
]);