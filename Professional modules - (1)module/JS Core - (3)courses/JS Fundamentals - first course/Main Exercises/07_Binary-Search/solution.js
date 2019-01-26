function binarySearch() {
    let number = document.getElementById("num").value;
    let array = document.getElementById("arr").value.split(", ");
    console.log(array);
    let index = -1;
    let result = document.getElementById("result");
    let print = "";
    if (array.includes(number)) {
        index = array.indexOf(number);
        print = `Found ${number} at index ${index}`
    }else {
        print = `${number} is not in the array`
    }
    result.textContent = print;
}