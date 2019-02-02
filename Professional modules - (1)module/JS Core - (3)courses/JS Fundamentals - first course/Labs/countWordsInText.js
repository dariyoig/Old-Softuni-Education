function solve(input) {
    input = input.join();
    let arr = input.match(/[A-Za-z_]+/g);
    let obj = {};
    arr.forEach(element => {
        if (obj.hasOwnProperty(element)) {
            let currentCount = obj[element];
            obj[element] = currentCount +1;
        }else {
            obj[element] = 1;
        }
    });
    console.log(JSON.stringify(obj));
}
solve([ 'Far too slow, you\'re far too slow.' ]);