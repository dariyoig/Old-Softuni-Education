function solve(input) {
    let rotations = Number(input.pop());

    console.log(arrayRotate(input, rotations).join(" "));

    function arrayRotate(arr, count) {
        count -= arr.length * Math.floor(count / arr.length)
        arr.push.apply(arr, arr.splice(0, count))
        return arr
    }
}
solve(
    ['Banana',
        'Orange',
        'Coconut',
        'Apple',
        '15']
);