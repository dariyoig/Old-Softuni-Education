function solve() {
  let string = document.getElementById("str").value;
  let resultEl = document.getElementById("result");
  let chars = ""
  string = string
    .split(" ")
    .forEach(x => {
      if (isNaN(x)) {
        let p = document.createElement("p");
        let result = x.split("").map(y => y.charCodeAt()).join(" ");

        p.textContent = result;
        resultEl.appendChild(p);

      } else {
        chars += (String.fromCharCode(x));
      }
    })
    let p =document.createElement("p")
    p.textContent = chars;
    resultEl.appendChild(p);
}