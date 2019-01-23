function solve() {
    Array.from(document.getElementsByTagName('button')).forEach((el) => {
        el.addEventListener('click', show);
    })

    function show(e) {
        let parent = e.target.parentNode;
        let input = parent.getElementsByTagName('input')[0];
        let hiddenDiv = parent.getElementsByTagName('div')[1];
        let isLocked = input.checked;
        let button = e.target;
        if (!isLocked && button.textContent === "Show more") {
            hiddenDiv.style.display = "block";
            button.textContent = "Hide";
            //return
        }else if (button.textContent === "Hide" && !isLocked){
            hiddenDiv.style.display = "none";
            button.textContent = "Show more";
        }

    }
} 