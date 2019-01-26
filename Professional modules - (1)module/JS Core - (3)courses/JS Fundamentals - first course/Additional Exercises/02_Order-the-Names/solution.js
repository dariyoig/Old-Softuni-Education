function solve(){
    let zero = "0";
    let a = ["5", "*", "1"]
    let last = a.slice(a.length -1).join("");
    a.splice(a.length -1, 1, last+zero)

    console.log(a);
    console.log(last);
    console.log(a);
}
solve()
