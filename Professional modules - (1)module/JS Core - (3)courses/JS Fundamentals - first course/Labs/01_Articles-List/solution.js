function solve() {
	let titleInputText = document.getElementById('createTitle').value;
	let textInputText = document.getElementById('createContent').value;

	if (textInputText && titleInputText) {

		let createH3 = document.createElement('h3');
		createH3.textContent = titleInputText;
		let createParagraph = document.createElement('p');
		createParagraph.textContent = textInputText;

		let createArticleEl = document.createElement('article');
		createArticleEl.appendChild(createH3);
		createArticleEl.appendChild(createParagraph);

		let getSection = document.getElementById('articles');
		getSection.appendChild(createArticleEl);
	}

	let titleClear = document.getElementById('createTitle');
	let textClear = document.getElementById('createContent');
	titleClear.value = "";
	textClear.value = "";
}