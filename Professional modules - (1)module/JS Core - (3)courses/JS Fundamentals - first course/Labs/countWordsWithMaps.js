function solve(input) {
    input = input.join();
    let arr = input.match(/[A-Za-z_]+/g);
    let obj = {};
    arr.forEach(element => {
        element = element.toLowerCase();
        if (obj.hasOwnProperty(element)) {
            let currentCount = obj[element];
            obj[element] = currentCount + 1;
        } else {
            obj[element] = 1;
        }
    });
    let sortArr = Object.keys(obj).sort();
    for (let key of sortArr) {
        console.log(`'${key}' -> ${obj[key]} times` );
    }
}
solve(
    ['Far too slow, you\'re far too slow.']
);