function solve() {
	Array.from(document.getElementsByTagName('button')).forEach((el) => {
        el.addEventListener('click', checkAndDisplay);
	});
	let points = 0;
	function checkAndDisplay(e) {
		let buttonText = e.target.textContent;
		let currentSection = e.target.parentNode;
		let nextQuestion = currentSection.nextElementSibling;
		let isRight = "";
		let currentSectionHeading = currentSection.childNodes[1].textContent;
		console.log();
		let resultDiv = document.getElementById("result");
		let print;
		switch (currentSectionHeading) {
			case "When SoftUni was created?": isRight = currentSection.getElementsByTagName("input")[1].checked;
				break;
			case "Which is the most popular name in the SoftUni?":isRight = currentSection.getElementsByTagName("input")[2].checked;
			break;
			case "Which of the following names is the founder of the SoftUni?": isRight = currentSection.getElementsByTagName("input")[3].checked;
			default:
				break;
		}
		if (isRight) {
			points++;
		}
		if (buttonText === "Next question") {
			nextQuestion.removeAttribute("class");
		}else if (buttonText === "Get the results"){
			if (points === 3) {
				 print = `You are recognized as top SoftUni fan!`
				resultDiv.textContent = print;
			}else {
				print = `You have ${points} right answers`;
				resultDiv.textContent = print;
			}
		}
	}
}