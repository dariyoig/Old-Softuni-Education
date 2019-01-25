function solve() {
  let arr = JSON.parse(document.getElementById("arr").value);
  let result = document.getElementById("result");
  let p1 = document.createElement("div");
  let p2 = document.createElement("div");
  let ascendingOrder = arr.map(x => +x).sort((a, b) => a - b);
  let alphaOrder = arr.sort();
  console.log(ascendingOrder);
  console.log(alphaOrder);
  p1.textContent = ascendingOrder.join(", ");
  result.appendChild(p1);
  p2.textContent = alphaOrder.join(", ");
  result.appendChild(p2);
}