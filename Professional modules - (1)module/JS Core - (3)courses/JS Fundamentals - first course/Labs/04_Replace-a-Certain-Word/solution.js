function solve() {
  let arr = JSON.parse(document.getElementById("arr").value);
  let replacer = document.getElementById("str").value;
  let replacee = arr[0][2];
  let regEx = new RegExp(replacee, "ig")

  for (let el of arr) {
    el = el.replace(regEx, replacer);
    let resultEl = document.getElementById("result");
    let p = document.createElement("p");
    p.textContent = el;
    resultEl.appendChild(p);
  }
}