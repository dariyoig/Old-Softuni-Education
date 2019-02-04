function solve() {
  document.querySelector("button").addEventListener("click", generateFurniture);
  document.querySelector("button:last-child").addEventListener("click", buyFurniture);



  function generateFurniture(e) {
    let list = document.getElementById("furniture-list");
    let arr = JSON.parse(document.querySelector("textarea").value);

    for (let el of arr) {
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

    textarea.textContent = result;
  }
}

[
  {"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2},
  {"name": "Sofa", "img": "https://res.cloudinary.com/maisonsdumonde/image/upload/q_auto,f_auto/w_200/img/grey-3-seater-sofa-bed-200-13-0-175521_9.jpg", "price": 150, "decFactor": 1.2}
]


// [
//   {
//     "name": "Wardrobe",
//     "img": "#",
//     "price": 160,
//     "decFactor": 0.8
//   },
//   {
//     "name": "Bed",
//     "img": "#",
//     "price": 2.80,
//     "decFactor": 5.80
//   },
//   {
//     "name": "Sofa",
//     "img": "#",
//     "price": 200,
//     "decFactor": 1.5
//   },
//   {
//     "name": "Wardrobe",
//     "img": "#",
//     "price": 160,
//     "decFactor": 0.8
//   }
// ]