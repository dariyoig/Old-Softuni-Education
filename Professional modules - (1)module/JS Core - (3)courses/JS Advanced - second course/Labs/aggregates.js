function solve(input) {
    console.log(`Sum = ${input.reduce((acc, c) => acc+c, 0)}`);
    console.log(`Min = ${Math.min(...input)}`);
    console.log(`Max = ${Math.max(...input)}`);
    console.log(`Product = ${input.reduce((acc, c) => acc*c)}`);
    console.log(`Join = ${input.join("")}`);
}
solve(
    [2, 3, 10, 5]
);
