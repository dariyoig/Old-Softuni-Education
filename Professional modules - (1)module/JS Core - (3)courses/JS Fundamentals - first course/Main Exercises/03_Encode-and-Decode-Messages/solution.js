function solve() {

	let onclick = document.getElementById("exercise").addEventListener('click', function (event) {
		let buttonClicked = event.target.textContent;
		let encodedArr = [];
		if (buttonClicked === 'Encode and send it') {
			let text = document.querySelectorAll('textarea')[0].value;
			let splittedText = text.split('');

			for (let i = 0; i < splittedText.length; i++) {
				let currentChar = splittedText[i];

				let originalAscii = Number(currentChar.charCodeAt());
				let newAscii = originalAscii + 1;
				let convert = String.fromCharCode(newAscii)
				encodedArr.push(convert);
				let encodedText = encodedArr.join('');
				let secondTextarea = document.querySelectorAll('textarea')[1];
				secondTextarea.textContent = encodedText;
				document.querySelectorAll('textarea')[0].value = "";
			}

		} else if (buttonClicked === 'Decode and read it') {
			let text = document.querySelectorAll('textarea')[1].value;
			let splittedText = text.split('');
			for (let i = 0; i < splittedText.length; i++) {
				let currentChar = splittedText[i];

				let originalAscii = Number(currentChar.charCodeAt());
				let newAscii = originalAscii - 1;
				let convert = String.fromCharCode(newAscii)
				encodedArr.push(convert);
				let encodedText = encodedArr.join('');
				let secondTextarea = document.querySelectorAll('textarea')[1];
				secondTextarea.textContent = encodedText;
			}
		}
	});


	
};