function solve() {
	let button = document.querySelector("button");
	button.addEventListener("click", display);

	function display() {
		let input = document.querySelector("input");
		let inputArr = input.value.split(" ").map(x => +x);

		if (inputArr.length === 6) {
			
		}else {
			return;
		}
		for (let i = 1; i <= 49; i++) {

			let allNumbers = document.getElementById("allNumbers");
			let div = document.createElement("div");
			if (inputArr.includes(i)) {
				div.style.background = "orange";
			}
			div.setAttribute("class", "numbers");
			div.textContent = i;
			allNumbers.appendChild(div);
		}
		input.setAttribute("disabled", "");
		button.setAttribute("disabled", "");
	}
}