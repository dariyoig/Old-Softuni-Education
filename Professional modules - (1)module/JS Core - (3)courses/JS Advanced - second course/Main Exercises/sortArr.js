function solve(arr, sortMethod) {
    let sorter = {
        "asc": (a, b) => a - b,
        "desc": (a, b) => b - a
    }
    return arr.sort(sorter[sortMethod]);
}