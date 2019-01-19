function solve(input) {
    let arr = input.toString()
                    .split('');
    let sum = 0;
    let isTrue = true;
    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);
        sum += currentNum;
        let first = Number(arr[0]);
        if (first === currentNum) {
        }else{
            isTrue = false;
        }
     
    }
    console.log(isTrue);
    console.log(sum);
}