function solve() {
    document.querySelector("button").addEventListener("click", convert);

    function convert(e) {
        const escapeRegExp = (string) => {
            return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
          }
        let input = document.getElementById("input").value;
        let output = document.getElementById("output");
        let firstNum = input.match(/[0-9]+/g)[0];
        input = input.replace(firstNum, "");
        let string = input.substr(0, +firstNum);
        let lastChar = string[string.length - 1];
        let escaped = escapeRegExp(lastChar);
        let reg = new RegExp(escaped,"g");
        let [partOne, partTwo] = string.split(reg);
        let  re = new RegExp("["+partOne+"]","g");
        partTwo = partTwo.replace(re, "");
        while(partTwo.includes("#")){
            partTwo = partTwo.replace("#", " ");
        }
        output.textContent = partTwo
    }
}