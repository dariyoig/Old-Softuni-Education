function solve() {
    Array.from(document.querySelectorAll("button.seat")).forEach(e => e.addEventListener("click", checkSeat));
    document.querySelector("#summary button").addEventListener("click", getMoneyAndFans);
    
    let [profit, numOfFans] = [0, 0];
    let prices = {
        "Litex": [10,7,5],
        "Levski": [10,7,5],
        "VIP": [25, 15,10] 
    }
    function checkSeat(e) {
        let output = document.getElementById("output");
        let section = e.path[5].className;
        let button = e.target;
        let seatNumber = e.target.textContent;
        let td = button.parentNode;
        let index = [...td.parentNode.children].indexOf(td);
        let sectors = ["A", "B", "C"];
        if (!button.hasAttribute("style")) {
            button.style.backgroundColor = "rgb(255,0,0)";
            output.textContent += ` Seat ${seatNumber} in zone ${section} sector ${sectors[index]} was taken.\n`;
            numOfFans++;
            profit += prices[section][index];
        } else {
            output.textContent += ` Seat ${seatNumber} in zone ${section} sector ${sectors[index]} is unavailable.\n`;
        }
       
    }
    function getMoneyAndFans(e) {
        let summarySpan = document.querySelector("#summary span");
        summarySpan.textContent = `${profit} leva, ${numOfFans} fans.`;
    }
}