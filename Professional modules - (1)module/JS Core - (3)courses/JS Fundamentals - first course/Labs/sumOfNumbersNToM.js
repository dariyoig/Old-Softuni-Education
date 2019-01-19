function solve(n, m) {
    let sum = 0;
    n = Number(n);
    for (let i = n; i <= m; i++) {
        sum+=i
    }
    console.log(sum)
}