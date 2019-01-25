function solve() {
  let searched = Number(document.getElementById("num").value);
  let arr = JSON.parse(document.getElementById("arr").value);
  let result = document.getElementById("result");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let string = arr[i];
    if (string.includes(searched)) {
      newArr.push(`true -> ${string.indexOf(searched)}`)
    }else {
      newArr.push(`false -> -1`)
    }
  }
  result.textContent = newArr.join(",");
}