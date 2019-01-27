function solve(input) {
    let arr = [];
    for(let i = 0; i < input.length; i++){
        let current = input[i];
        
        if (current === "add") {
            arr.push(i+1)
        }else if (current === "remove"){
            arr.pop();
        }
    }
    if (arr.length > 0) {
        console.log(arr.join("\n"));
    }else {
        console.log("Empty");
    }
}
solve(
    ['remove', 
    'remove', 
    'remove']
)