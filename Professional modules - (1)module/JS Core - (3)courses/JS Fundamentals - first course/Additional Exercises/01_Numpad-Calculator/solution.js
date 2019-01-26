function solve() {
    Array.from(document.querySelectorAll("#exercise button")).forEach(
        x => x.addEventListener("click", calc)
    );
    let expressionOutput = [];

    function calc(e) {
        let value = e.target.value;
        let expression = document.getElementById("expressionOutput");
        let result = document.getElementById("resultOutput");

        switch (value) {

            case "*":
            expressionOutput.push("*");
                break;
            case "/":
            expressionOutput.push("/");
                break;
            case "+":
            expressionOutput.push("+");
                break;
            case "-":
            expressionOutput.push("-");
                break;
            case "Clear":
            expressionOutput = [];
            result.textContent = "";
                break;
            case "=":
            if (expressionOutput.length ===3) {
                result.textContent = eval(expressionOutput.join(' '));
            }else{
                result.textContent = "NaN";
            }
                break;
            default:
                if (expressionOutput.length === 1 || expressionOutput.length === 3) {
                    let last = expressionOutput.slice(expressionOutput.length - 1).join("");
                    expressionOutput.splice(expressionOutput.length - 1, 1, last + value);
                } else {
                    expressionOutput.push(value);
                }
                break;
        }
        expression.textContent = expressionOutput.join(" ");
        console.log(expressionOutput);
    }
}