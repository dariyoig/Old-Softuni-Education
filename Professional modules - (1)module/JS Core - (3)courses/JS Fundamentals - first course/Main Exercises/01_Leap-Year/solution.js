function leapYear() {
    let button = document.getElementsByTagName("button")[0];
    button.addEventListener("click", check);

    function check() {
        let inputYear = document.getElementsByTagName("input")[0].value;

        let isLeap = ((inputYear % 4 == 0) && (inputYear % 100 != 0)) || (inputYear % 400 == 0)
        let h2 = document.getElementsByTagName("h2")[0];
        let div = document.getElementById("year").getElementsByTagName("div")[0];
        if (isLeap) {
            h2.textContent = "Leap Year";
            div.textContent = `${inputYear}`
        } else if (isLeap === false) {
            h2.textContent = "Not Leap Year";
            div.textContent = `${inputYear}`;
        }
        document.getElementsByTagName("input")[0].value = "";
    }
}