function solve() {
    let buttons = document.querySelectorAll("#exercise button");
    let initialNum = document.querySelector("#exercise input");
    let output = document.getElementById('output');
    buttons[0].addEventListener("click", (x) => {output.textContent = initialNum / 2});
    // buttons[1].addEventListener("click", );
    // buttons[2].addEventListener("click", );
    // buttons[3].addEventListener("click", );
    // buttons[4].addEventListener("click", );
    

}
