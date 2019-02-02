function solve(input) {
    let obj = {};
    for(let i = 0; i < input.length; i+=2){
        let currentCity = input[i];
        let value = Number(input[i+1]);
        if (obj.hasOwnProperty(currentCity)) {
            let currentValue = obj[currentCity];
            obj[currentCity] = currentValue + value;
        }else{
            obj[currentCity] = value;
        }
    }
    console.log(JSON.stringify(obj));
}
solve(
    [ 'Sofia', '20', 'Varna', '3', 'Sofia', '5', 'Varna', '4' ]
);