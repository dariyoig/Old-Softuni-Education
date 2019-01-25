function solve() {
  document.getElementById("result").textContent = JSON.parse(document.getElementById("arr").value).map( x => x.split("").reverse().join("") ).map( y => y[0].toUpperCase() + y.slice(1)).join(" ");
}