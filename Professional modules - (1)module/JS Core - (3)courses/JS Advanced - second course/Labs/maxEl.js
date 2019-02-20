function solve(input) {
    return Math.max(...input);
}
//OR
function solve(input) {
    return input.reduce((acc, c) => Math.max(acc, c));
}
//OR
function solve(input) {
    return input.sort((a, b) => b-a)[0];
}
//OR
function solve(input) {
    return Math.max.apply(null, input);
}