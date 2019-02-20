function solve(matrix, commandInput) {
    let [command, header, value] = commandInput.split(" ");
    let headerOutput = "";
    let output = "";
    let index = 0;
    switch (command) {
        case 'sort':
            index = matrix[0].indexOf(header);
            headerOutput = matrix.shift();
            output = matrix.sort((a, b) => a[index].localeCompare(b[index]));
            break;
        case 'hide':
            index = matrix[0].indexOf(header);
            output = matrix.map(x=> {
                delete x[index];
                return x;
            });
            for (let arr of output) {
                arr = arr.filter( x => x !== "")
                console.log(arr.join(" | "));
            }
            return;
            break;
        case 'filter':
            index = matrix[0].indexOf(header);
            headerOutput = matrix.shift();
            output = matrix.filter(x => x[index] === value);
            break;
        default:
            break;
    }
    console.log(headerOutput.join(" | "));
    for (let arr of output) {
        console.log(arr.join(" | "));
    }
}
solve(
    [
        ['firstName', 'age', 'grade', 'course'],
        ['Peter', '25', '5.00', 'JS-Core'],
        ['George', '34', '6.00', 'Tech'],
        ['Marry', '28', '5.49', 'Ruby']
    ],
    'hide age'
);