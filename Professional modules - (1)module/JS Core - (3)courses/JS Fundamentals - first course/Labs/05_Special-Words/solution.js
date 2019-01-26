function solve() {
  let num1 = Number(document.getElementById("firstNumber").value);
  let num2 = Number(document.getElementById("secondNumber").value);
  let tr1 = document.getElementById("firstString").value;
  let tr2 = document.getElementById("secondString").value;
  let tr3 = document.getElementById("thirdString").value;
  let result = document.getElementById("result");

  for (let i = num1; i <= num2; i++) {
    let p = document.createElement("p");
    if (i % 3 === 0 && i % 5 === 0) {
      p.textContent = `${i} ${tr1}-${tr2}-${tr3}`;
      result.appendChild(p);
    } else if (i % 3 === 0) {
      p.textContent = `${i} ${tr2}`;
      result.appendChild(p);
    } else if (i % 5 === 0) {
      p.textContent = `${i} ${tr3}`;
      result.appendChild(p);
    } else {
      p.textContent = `${i}`;
      result.appendChild(p);
    }
  }
}