function solve() {
  //Get the input and convert it to JS array using JSON.parse
  let arr = JSON.parse(document.getElementById("arr").value);

  //Get the span to which we will append the result
  let result = document.getElementById("result");

  //Get the length of arr (we are using it as a multiplier of each number in the array)
  let length = arr.length;

  //Cycle through the array, multiplying each number with the length of the array
  for (let i = 0; i < length; i++) {

    //Create new paragraph for each print
    let p = document.createElement("p");

    //Create the text which will be printed
    let text = `${i} -> ${arr[i] * length}`;

    //Add the text to the paragraph
    p.textContent = text;
    
    //Append the paragraph to the result span
    result.appendChild(p);

  }
}