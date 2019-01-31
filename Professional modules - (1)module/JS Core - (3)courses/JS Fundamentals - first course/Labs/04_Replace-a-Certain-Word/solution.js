function solve() {
  let arr = JSON.parse(document.getElementById("arr").value);
  let replacer = document.getElementById("str").value;
  let length = arr[0].slice(7);
  let regex = new RegExp(arr[0].slice(7).toLowerCase());

  for(let el of arr){
    let index = el.toLowerCase().indexOf(regex);
    console.log(index);
    console.log(length);
  }

  console.log(arr);
}