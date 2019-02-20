function solve(input) {

    let townPriceObj = {}
    for (let vin of input) {
        let town = vin.town;
        if (townPriceObj.hasOwnProperty(town)) {
            let newValue = townPriceObj[town].money + vin.price;
            townPriceObj[town].money = newValue;
            townPriceObj[town].count = townPriceObj[town].count + 1;
        } else {
            townPriceObj[town] = {
                "money": vin.price,
                "count": 1
            }
        }
    }
    townPriceObj = Object.entries(townPriceObj).sort((a, b) => b[1].money - a[1].money || a[1].count - b[1].count || a[0].localeCompare(b[0]));
    let mostProfitableTown = townPriceObj[0][0];
    let profit = townPriceObj[0][1].money;

    let mostDrivenObj = {};
    for (let obj of input) {
        if (obj.town == mostProfitableTown) {
            let model = obj.model;
            if (mostDrivenObj.hasOwnProperty(model)) {
                mostDrivenObj[model] = [mostDrivenObj[model] + 1, obj.price];

            } else {
                mostDrivenObj[model] = [1, obj.price];
            }
        }
    }
    mostDrivenObj = Object.entries(mostDrivenObj).sort((a, b) => b[1][0] - a[1][0] || b[1][1] - a[1][1] || a[0].localeCompare(b[0]));
    let mostDrivenModel = mostDrivenObj[0][0];

    let townsWithMostDrivenModel = {};
    input.forEach(x => {
        if (x.model === mostDrivenModel && !townsWithMostDrivenModel.hasOwnProperty(x.town)) {
            townsWithMostDrivenModel[x.town] = [x.regNumber];
        } else if (x.model === mostDrivenModel) {
            townsWithMostDrivenModel[x.town].push(x.regNumber)
        }
    })
    townsWithMostDrivenModel = Object.entries(townsWithMostDrivenModel).sort((a, b) => b[0] < a[0]);

    console.log(`${mostProfitableTown} is most profitable - ${profit} BGN`);
    console.log(`Most driven model: ${mostDrivenModel}`);
    for (let arr of townsWithMostDrivenModel) {
        console.log(`${arr[0]}: ${arr[1].sort().join(", ")}`);
    }
}
solve(
    [
        { model: 'BMW', regNumber: 'B1234SM', town: 'ASofia', price: 5 },
        { model: 'BMW', regNumber: 'C5959CZ', town: 'ASofia', price: 5 },
        { model: 'BMW', regNumber: 'A3423SM', town: 'BPernik', price: 5 },
        { model: 'Merc', regNumber: 'SJSCA', town: 'ASofia', price: 5 },
        { model: 'Merc', regNumber: 'CB4565U', town: 'BPernik', price: 5 },
        { model: 'Merc', regNumber: 'NIKOLA', town: 'BPernik', price: 5 }
    ]

);