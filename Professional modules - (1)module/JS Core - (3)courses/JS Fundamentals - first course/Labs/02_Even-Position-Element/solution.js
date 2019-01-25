function solve() {
  let arr = JSON.parse(document.getElementById("arr").value);
  let result = document.getElementById("result");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      newArr.push(arr[i]);
    }
  }
  result.textContent = newArr.join(" x ")
}
