function solve() {
  let string = document.getElementById("string").value;
  let char = document.getElementById("character").value;
  let count = 0;
  let print;
  string.split("").forEach(x => {
    if (x===char) {
      count++;
    }
  })
  console.log(count);
  if (count % 2 ===0) {
    print = `Count of ${char} is even.`;
  }else {
    print = `Count of ${char} is odd.`
  }
  document.getElementById("result").textContent = print;
}