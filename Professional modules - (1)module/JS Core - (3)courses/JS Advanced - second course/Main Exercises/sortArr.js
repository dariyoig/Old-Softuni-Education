function solve(arr, command) {
    switch (command) {
        case 'asc': return arr.sort((a, b) => a - b);
        default: return arr.sort((a, b) => b - a)
    }
}