function solve() {
  let string = document.getElementById("str1").value;
  let format = document.getElementById("str2").value;
  let resultEl = document.getElementById("result");
  let result;

  let modified = string
    .split(" ")
    .map(x => x[0].toUpperCase() + x.slice(1).toLowerCase())
    .join("");

  switch (format) {
    case "Camel Case":
      result = modified[0].toLowerCase()+ modified.slice(1);
      break;
    case "Pascal Case":
      result = modified;
      break

    default: result = "Error!"
      break;
  }

  resultEl.textContent = result;
}