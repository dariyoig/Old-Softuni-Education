function solve() {
  document.querySelector("button").addEventListener("click", loadProducts);
  document.querySelectorAll("#exercise button")[1].addEventListener("click", buyProducts);
  document.querySelectorAll("#exercise button")[2].addEventListener("click", getProfit);
  let textAreas = document.querySelectorAll("#exercise textarea");
  let globalArr = [];
  let profit = 0;

  function loadProducts(e) {
    let arr = JSON.parse(textAreas[0].value);

    for (let product of arr) {
      textAreas[2].value += `Successfully added ${product.quantity} ${product.name}. Price: ${product.price}\n`
      globalArr.push(product);
    }
  }

  function buyProducts(e) {

    let obj = JSON.parse(textAreas[1].value);
    let result = "";
    if (globalArr.length == 0) {
      result = "Cannot complete order.\n";
      return;
    }
    for (let product of globalArr) {
      if (product.name === obj.name) {
        if (product.quantity >= obj.quantity) {
          product.quantity = product.quantity - obj.quantity;
          profit += obj.quantity * product.price;
          result = `${obj.quantity} ${obj.name} sold for ${profit}.\n`

        } else {
          result = "Cannot complete order.\n";

        }
      }
    }

    textAreas[2].value += result;
  }

  function getProfit(e) {
    textAreas[2].value += `Profit: ${profit.toFixed(2)}`;
    Array.from(document.querySelectorAll("button")).map(x => x.disabled = true);
  }
}

[
  {
    "name": "tomatoes",
    "quantity": 20,
    "price": 0.50
  },
  {
    "name": "potatoes",
    "quantity": 10,
    "price": 0.60
  }
]
// {
//   "name": "tomatoes",
//   "quantity": 20

// }