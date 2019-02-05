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

    for (let product of storage) {
      if ((product.name === order.name) && (product.quantity >= order.quantity)) {
        let boughtFor = 0;
        product.quantity = product.quantity - order.quantity;
        profit += order.quantity * product.price;
        boughtFor = order.quantity * product.price;
        textAreas[2].value += `${order.quantity} ${order.name} sold for ${boughtFor}.\n`;
        return;
      }
    }
    textAreas[2].value += "Cannot complete order.\n";
  }


  function getProfit(e) {
    textAreas[2].value += `Profit: ${profit.toFixed(2)}\n`;
    document.getElementsByTagName('button')[0].removeEventListener('click', loadProducts);
    document.getElementsByTagName('button')[1].removeEventListener('click', buyProducts);
    document.getElementsByTagName('button')[2].removeEventListener('click', getProfit);
  }
}