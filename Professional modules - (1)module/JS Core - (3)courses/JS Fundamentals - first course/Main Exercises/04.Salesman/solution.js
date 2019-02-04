function solve() {

  document.querySelector("button").addEventListener("click", loadProducts);
  document.querySelectorAll("#exercise button")[1].addEventListener("click", buyProducts);
  document.querySelectorAll("#exercise button")[2].addEventListener("click", getProfit);

  let textAreas = document.querySelectorAll("#exercise textarea");
  let storage = [];
  let profit = 0;

  function loadProducts(e) {
    let loadArr = JSON.parse(textAreas[0].value);

    for (let newProduct of loadArr) {
      let exists = false;
      for (let product of storage) {
        if (product.name === newProduct.name) {
          exists = true;
          let currentQuantity = product.quantity;
          product.quantity = currentQuantity + newProduct.quantity;
          product.price = newProduct.price;
        }
      }
      if (!exists) {
        storage.push(newProduct);
      }
      textAreas[2].value += `Successfully added ${newProduct.quantity} ${newProduct.name}. Price: ${newProduct.price}\n`
    }
  }

  function buyProducts(e) {

    let order = JSON.parse(textAreas[1].value);
    let result = "";

    for (let product of storage) {
      if (product.name === order.name) {
        if (product.quantity >= order.quantity) {
          let boughtFor = 0;
          product.quantity = product.quantity - order.quantity;
          profit += order.quantity * product.price;
          boughtFor = order.quantity * product.price;
          result = `${order.quantity} ${order.name} sold for ${boughtFor}.\n`;
          break;

        } else {
          result = "Cannot complete order.\n";
        }
      } else {
        result = "Cannot complete order.\n";
      }
    }
    textAreas[2].value += result;
  }


  function getProfit(e) {
    textAreas[2].value += `Profit: ${profit.toFixed(2)}\n`;
    loadArray.from(document.querySelectorAll("button")).map(x => x.disabled = true);
  }
}