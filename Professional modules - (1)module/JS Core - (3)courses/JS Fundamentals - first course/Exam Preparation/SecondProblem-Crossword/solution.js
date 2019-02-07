function solve() {
    document.querySelector("#filter button").addEventListener("click", filter);
    document.querySelector("#sort button").addEventListener("click", sort);
    document.querySelector("#rotate button").addEventListener("click", rotate);
    document.querySelector("#get button").addEventListener("click", get);

    let outputParagraph = document.querySelector("#output p");
    let stringElement = document.getElementById("input");

    function filter(e) {
        let value = stringElement.value;
        let selectElement = document.getElementById("filterSecondaryCmd");
        let selectedOpt = selectElement.options[selectElement.selectedIndex].value;
        let result = "";
        let num = document.getElementById("filterPosition").value;

        switch (selectedOpt) {
            case "uppercase": result = upperCase(value, num);
                break;
            case "lowercase": result = lowerCase(value, num);
                break;
            case "nums": result = nums(value, num);
                break;
            default:
                break;
        }

        outputParagraph.textContent += result;

        function upperCase(value, num) {
            value = value
                .split("")
                .filter(x => {
                    if (x.charCodeAt(0) >= 65 && x.charCodeAt(0) <= 90) return true;
                    else return false;
                })
                .join("");

            return value[num - 1];
        }
        function lowerCase(value, num) {
            value = value
                .split("")
                .filter(x => {
                    if (x.charCodeAt(0) >= 97 && x.charCodeAt(0) <= 122) return true;
                    else return false;
                })
                .join("");

            return value[num - 1];
        }
        function nums(value, num) {
            value = value
                .split("")
                .filter(x => !isNaN(x))
                .join("");

            return value[num - 1];
        }
    }

    function sort(e) {
        let value = stringElement.value;
        let selectElement = document.getElementById("sortSecondaryCmd");
        let selectedOpt = selectElement.options[selectElement.selectedIndex].value;
        let result = "";
        let num = document.getElementById("sortPosition").value;

        switch (selectedOpt) {
            case 'A': result = value.split("").sort().join("")[num-1];
                break;
            case 'Z': result = value.split("").sort((a, b) => b.localeCompare(a)).join("")[num -1];
                break;
            default:
                break;
        }
        outputParagraph.textContent += result;
    }

    function rotate(e) {
        let value = stringElement.value;
        let rotations = document.getElementById("rotateSecondaryCmd").value;
        let result = "";
        let num = document.getElementById("rotatePosition").value;

        result = rotation(value, num, rotations);

        outputParagraph.textContent += result;

        function rotation(value, num, rotations) {
            value = value.split("");
            for (let i =0; i < rotations; i++){
                value.unshift(value.pop());
            }
            return value.join("")[num-1];
        }
    }

    function get(e) {
        let value = stringElement.value;
        let result = "";
        let num = document.getElementById("getPosition").value;

        result = value[num -1];

        outputParagraph.textContent += result;
    }
}