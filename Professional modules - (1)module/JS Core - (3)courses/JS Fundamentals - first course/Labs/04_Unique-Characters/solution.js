function solve() {
  let string = document.getElementById("string").value;
  string = string.split("");
  let newStr = [];
  for (let i = 0; i < string.length; i++) {
    let current = string[i];
    if (current === " ") {
      newStr.push(current);

    }else {
      if (!newStr.includes(current)) {
        newStr.push(current)
      }
    }

  }
  document.getElementById("result").textContent = newStr.join("");
}