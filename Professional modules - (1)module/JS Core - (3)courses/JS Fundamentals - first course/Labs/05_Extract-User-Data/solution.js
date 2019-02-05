function solve() {
  let array = JSON.parse(document.getElementById("arr").value);
  for(let user of array){
    console.log(user.split(/[ ][a-z+]/g));
  }
}