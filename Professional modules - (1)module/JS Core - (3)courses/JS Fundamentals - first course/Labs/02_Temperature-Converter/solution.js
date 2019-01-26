function solve() {
  let degrees = Number(document.getElementById("num1").value)
  let string = document.getElementById("type").value.toLowerCase();
  let result = document.getElementById("result");

  switch (string) {
    case 'celsius':
      result.textContent = Math.round(((degrees * 9) / 5) + 32);
      break;
    case 'fahrenheit':
      result.textContent = Math.round(((degrees - 32) * 5) /9);
      break;

    default: result.textContent = "Error!";
      break;
  }

  console.log(string);
}