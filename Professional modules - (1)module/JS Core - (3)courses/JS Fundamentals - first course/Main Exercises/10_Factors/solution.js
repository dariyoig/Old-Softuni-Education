function solve() {
    let num = Number(document.getElementById("num").value);
    let result = document.getElementById("result");
    const factors = number => Array
        .from(Array(number + 1), (_, i) => i)
        .filter(i => number % i === 0)

    result.textContent = `${factors(num).join(" ")}`;
    console.log(factors(num));
}