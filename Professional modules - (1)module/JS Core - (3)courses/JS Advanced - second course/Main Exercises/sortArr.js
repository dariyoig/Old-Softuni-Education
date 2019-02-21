function solve(arr, command) {
    let sorter = {
        "asc": (a, b) => a - b,
        "desc": (a, b) => b - a
    }
    return arr.sort(sorter[command]);
}