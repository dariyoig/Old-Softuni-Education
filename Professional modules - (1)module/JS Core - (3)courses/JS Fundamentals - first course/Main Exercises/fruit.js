function solve(fruit, quantity, price) {
    quantity = quantity/1000;
    price = price * quantity;
    console.log(`I need ${price.toFixed(2)} leva to buy ${quantity.toFixed(2)} kilograms ${fruit}.`)
}