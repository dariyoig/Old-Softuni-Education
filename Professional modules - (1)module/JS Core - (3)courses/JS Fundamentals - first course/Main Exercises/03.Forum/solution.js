function solve() {

    document.querySelector("form button").addEventListener("click", submitUser);
    document.querySelector("#exercise > button").addEventListener("click", searchString);

    function submitUser(e) {
        e.preventDefault();
        let userInputs = Array.from(document.querySelectorAll(".user-info input")).map(x => x.value);
        userInputs.splice(1, 1);
        let topics = Array.from(document.querySelectorAll(".topics input"));
        let checked = topics.filter(x => x.checked).map(x => x.value);
        userInputs.push(checked);
        let tableBody = document.querySelector("table tbody");
        let tdata = "";
        let tr = document.createElement("tr");

        for (let el of userInputs) {
            if (Array.isArray(el)) {
                tdata += `<td>${el.join(" ")}</td>\n`;
            } else {
                tdata += `<td>${el}</td>\n`;
            }
        }
        tr.innerHTML = tdata;
        tableBody.appendChild(tr);
    }

    function searchString(e) {
        let string = document.querySelector("#exercise > input").value;
        let rows = Array.from(document.querySelectorAll("table tbody tr"));

        for (let row of rows) {
            let stringRow = row.textContent;
            if (stringRow.includes(string)) {
                row.style.visibility = "visible";
            }else{
                row.style.visibility = "hidden";
            }
        }
    }
}
