let manager = (function () {
    let recipies = {
        apple: { carbohydrate: 1, flavour: 2 },
        coke: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        omelet: { protein: 5, fat: 1, flavour: 1 },
        cheverme: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    }
    let storage = {protein: 0,carbohydrate: 0,fat: 0,flavour: 0}
    return function (value) {
        let [command, item, quantity] = value.split(" ");
        switch (command) {
            case 'restock':
                restock(item, quantity, storage);
                return 'Success';
            case 'prepare':
                let [hasEnough, notEnoughOf] = hasEnoughMacros(storage, recipies[item], quantity);
                if (hasEnough) {
                    return `Success`;
                } else {
                    return `Error: not enough ${notEnoughOf} in stock`
                }
            case 'report':
                return `protein=${storage.protein} carbohydrate=${storage.carbohydrate} fat=${storage.fat} flavour=${storage.flavour}`;
        }

        function restock(item, quantity, obj) {
            obj[item] += +quantity;
        }

        function hasEnoughMacros(storage, recipie, quantity) {
            let returnValue = true;
            let product;
            for(let macro in recipie){
                if (recipie[macro]*quantity > storage[macro]) {
                    product = macro;
                    returnValue = false;
                    break;
                }
            }
            if (returnValue) {
                for(let macro in recipie){
                    storage[macro] -= recipie[macro]*quantity;
                }
            }
            return [returnValue, product];

        }
    }
})();

console.log(manager("restock protein 100"));
console.log(manager("restock carbohydrate 100"));
console.log(manager("restock fat 100"));
console.log(manager("restock flavour 100"));
console.log(manager("report"));
console.log(manager("prepare omelet 2"));
console.log(manager("report"));
console.log(manager("prepare omelet 1"));
console.log(manager("report"));
