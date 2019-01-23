function solve() {
    let binaryOption = document.createElement('option');
    binaryOption.value = "binary";
    binaryOption.textContent = "Binary";
    binaryOption.setAttribute("selected", "");
    let hexaOption = document.createElement('option');
    hexaOption.value = "hexa";
    hexaOption.textContent = "Hexademical";

    let menu = document.getElementById('selectMenuTo');

    menu.appendChild(binaryOption);
    menu.appendChild(hexaOption);
    menu.removeChild(menu.childNodes[1]);

    document.getElementsByTagName('button')[0].addEventListener('click', convert);

    function convert() {
        let inputNum = document.getElementById('input').value;
        let resultInput = document.getElementById('result');
        let isBinarySelected = binaryOption.selected;
        let isHexaSelected = hexaOption.selected;
        let result = 0;
        if (isBinarySelected) {
            result = parseInt(inputNum, 10).toString(2);
            resultInput.value = result;
        } else if (isHexaSelected) {
            result = Number(inputNum).toString(16);
            resultInput.value = result.toUpperCase();
        }
    }
}