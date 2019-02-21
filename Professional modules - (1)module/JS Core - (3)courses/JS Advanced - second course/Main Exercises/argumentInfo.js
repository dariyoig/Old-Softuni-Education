function solve() {

    Object.fromEntries = arr =>
        Object.assign({}, ...Array.from(arr, ([k, v]) => ({ [k]: v })));

    let counts = {};
    for (let i = 0; i< arguments.length; i++) {
        let obj = arguments[i];
        let type = typeof obj;
        console.log(`${type}: ${obj}`);
        if (counts.hasOwnProperty(type)) {
            counts[type] += 1;
        } else {
            counts[type] = 1;
        }
    }
    counts = Object.fromEntries(Object.entries(counts).sort((a, b) => b[1] - a[1]));
     for(let type in counts){
         console.log(`${type} = ${counts[type]}`);
     }
}