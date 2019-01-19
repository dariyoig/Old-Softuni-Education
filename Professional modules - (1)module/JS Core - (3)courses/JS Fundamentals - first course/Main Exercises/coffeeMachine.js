function solve(input) {
    let earnings = 0;
    for (let i = 0; i < input.length; i++) {
        let currentOrder = input[i].split(', ');
        let sugar = +currentOrder[currentOrder.length - 1];
        let money = +currentOrder[0];
        let drink = currentOrder[1];
        let drinkPrice = 0;
        let type = currentOrder[2];
        let priceSum = 0;
        let milkPrice = 0;
        

        switch (drink) {
            case 'coffee':
                if (type === 'caffeine') {
                    drinkPrice = 0.80;
                } else if (type === 'decaf') {
                    drinkPrice = 0.90;
                }
                break;
            case 'tea': drinkPrice = 0.80;

                break;
        }

        if (currentOrder.includes('milk')) {
            milkPrice =+(drinkPrice*0.10).toFixed(1)
            
        }
        if (sugar !== 0) {
            sugar = 0.10;
        }
        priceSum = drinkPrice + sugar + milkPrice;

        if (money>= priceSum) {
            console.log(`You ordered ${drink}. Price: ${priceSum.toFixed(2)}$ Change: ${(money - priceSum).toFixed(2)}$`);
            earnings += priceSum;
        }else {
            console.log(`Not enough money for ${drink}. Need ${(priceSum - money).toFixed(2)}$ more.`)
        }
         
    }
    console.log(`Income Report: ${earnings.toFixed(2)}$`)
}