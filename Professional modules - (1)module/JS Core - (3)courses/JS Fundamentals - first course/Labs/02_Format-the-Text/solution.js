function solve() {
  let inputText = document.getElementById('input').textContent;
  let outputParent = document.getElementById('output');
  let splitted = inputText.split('.');


  for (let i = 0; i < splitted.length; i++) {
    let currentSentence = splitted[i];
    if (currentSentence.length < 1) {
      let index = splitted.indexOf(currentSentence);
      splitted.splice(index, 1);
    }
  }

  if (splitted.length <= 3) {
    let newParagraph = document.createElement('p');
    newParagraph.innerText = inputText;
    outputParent.appendChild(newParagraph);
  } else {

    let check = 1;
    while (check === 1) {
      if (splitted.length > 3) {
        let newParagraph = document.createElement('p');
        let paragraphSentences = splitted.splice(0, 3).join('.');
        newParagraph.innerText = paragraphSentences;
        outputParent.appendChild(newParagraph);
      }else {
        let lastNewParagraph = document.createElement('p');
        let lastParagraphSentences = splitted.join('.');
        lastNewParagraph.innerText = lastParagraphSentences;
        outputParent.appendChild(lastNewParagraph);
        check = 0;
      }
    }
  }
}





//Second solution
function solve() {
  let text = document.getElementById('input').textContent.split(".").filter(r => r.length > 0);
  let output = document.getElementById('output');
  let paragraphs;
  
  if(text.length > 0){
      paragraphs = text.length <= 3 ? 1 : text.length / 3; } for(let i=0, p=0; i < paragraphs; i++, p+=3){ let currentP=document.createElement('p');
      currentP.textContent=text.slice(p, (p + 3)).join(".") + "." ; output.appendChild(currentP);
  }
  }