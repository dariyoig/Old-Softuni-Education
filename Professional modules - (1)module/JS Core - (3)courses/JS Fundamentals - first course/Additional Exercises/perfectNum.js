function solve(input) {

    let perfectArr = [];
    for (let i = 0; i < input.length; i++) {
        let currentNum = input[i];

        isPerfect(currentNum, perfectArr);
    }
    if (perfectArr.length === 0) {
        console.log(`No perfect number`);
    }else {
        console.log(perfectArr.join(', '));
    }
    function isPerfect(number, arr) {
        var temp = 0;
        for (var i = 1; i <= number / 2; i++) {
            if (number % i === 0) {
                temp += i;
            }
        }

        if (temp === number && temp !== 0) {
             return arr.push(number)
        }
    }
}