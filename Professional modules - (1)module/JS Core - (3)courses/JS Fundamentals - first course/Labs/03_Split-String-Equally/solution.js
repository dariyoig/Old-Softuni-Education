function solve() {
  let string = document.getElementById("str").value;
  let num = Number(document.getElementById("num").value);
  let resultEl = document.getElementById("result");
  let splitted = chunkString(string, num);
  let lastEl = splitted[splitted.length-1];
  if (lastEl.length !== num) {
    let length = lastEl.length; 
    let add = splitted[0].slice(0, num - length);
    splitted.pop()
    splitted.push(lastEl+add);
  }
  resultEl.textContent = splitted.join(" ");

function chunkString(str, length) {
  return str.match(new RegExp('.{1,' + length + '}', 'g'));
}
}