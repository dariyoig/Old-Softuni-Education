function solve() {
  document.querySelector("button").addEventListener("click", generateFurniture);
  document.querySelector("button:last-child").addEventListener("click", buyFurniture);

  function generateFurniture(e) {
    let list = document.getElementById("furniture-list");
    let listOfFurniture = JSON.parse(document.querySelector("textarea").value);

    for (let el of listOfFurniture) {
      let div = document.createElement("div");
      div.setAttribute("class", "furniture");

      let p1 = document.createElement("p");
      p1.textContent = `Name: ${el.name}`;
      div.appendChild(p1);

      let img = document.createElement("img");
      img.setAttribute("src", el.img);
      div.appendChild(img);

      let p2 = document.createElement("p");
      p2.textContent = `Price: ${+el.price}`;
      div.appendChild(p2);

      let p3 = document.createElement("p");
      p3.textContent = `Decoration factor: ${+el.decFactor}`;
      div.appendChild(p3);

      let input = document.createElement("input");
      input.setAttribute("type", "checkbox");
      div.appendChild(input);

      list.appendChild(div);
    }
  }

  function buyFurniture(e) {
    let textarea = document.querySelectorAll("textarea")[1];
    let arrayOfInputs = Array.from(document.querySelectorAll("input"));
    let checkedInputs = arrayOfInputs.filter(x => x.checked)
    let items = [];
    let sum = 0;
    let facSum = 0;
    let result = "";

    for (let el of checkedInputs) {

      let parent = el.parentNode;
      let paragraphs = parent.querySelectorAll("p");

      let nameValue = paragraphs[0].textContent;
      let [, name] = nameValue.split(": ");

      let priceValue = paragraphs[1].textContent;
      let [, price] = priceValue.split(": ");

      let decFacValue = paragraphs[2].textContent;
      let [, decFactor] = decFacValue.split(": ");

      if (!items.includes(name)) {
        items.push(name)
      }
      sum += +price;
      facSum += +decFactor;
    }

    result += `Bought furniture: ${items.join(" ")}\n`;
    result += `Total price: ${sum.toFixed(2)}\n`;
    result += `Average decoration factor: ${(facSum/checkedInputs.length).toFixed(2)}\n`;

    textarea.textContent += result;
  }
}
