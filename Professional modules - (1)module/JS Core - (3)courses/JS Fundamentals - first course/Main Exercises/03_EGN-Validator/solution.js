function validate() {
    let button = document.getElementsByTagName("button")[0].addEventListener("click", getEgn);

    let months = {
        "January":"01",
        "February":"02",
        "March":"03",
        "April":"04",
        "May":"05",
        "June":"06",
        "July":"07",
        "August": "08",
        "September":"09",
        "October":"10",
        "November":"11",
        "December":"12"
        
    }
    function getEgn() {
        let p = document.getElementById("egn");
        let year = document.getElementById("year");
        let e = document.getElementById("month");
        let month = e.options[e.selectedIndex];
        let date = document.getElementById("date");
        let male = document.getElementById("male").checked;
        let region = document.getElementById("region");
        let egn = [];

        egn.push((year.value).substring(2, 4));
        egn.push(months[month.value]);
        if (date.value.length <2) {
            egn.push("0"+date.value)
        }else {
            egn.push(date.value)
        }
        egn.push((region.value).substring(0, 2));
        if (male) {
            egn.push("2");
        }else {
            egn.push("1");
        }

        p.textContent = `Your EGN is: ${egn.join("")}`;
        console.log(egn);
    }
}