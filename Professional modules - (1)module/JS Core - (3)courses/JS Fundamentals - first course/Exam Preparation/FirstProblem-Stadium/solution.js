function solve() {
    Array.from(document.querySelectorAll("button.seat")).forEach(e => e.addEventListener("click", checkSeat));
    document.querySelector("#summary button").addEventListener("click", getMoneyAndFans);
    
    let profit = 0;
    let numOfFans = 0;
    let prices = {
        "Litex": {
            "0": 10,
            "1": 7,
            "2": 5
        },
        "Levski": {
            "0": 10,
            "1": 7,
            "2": 5
        },
        "VIP": {
            "0": 25,
            "1": 15,
            "2": 10
        }
    }
    function checkSeat(e) {
        let outputArea = document.getElementById("output");
        let section = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector("h2").textContent;
        let button = e.target;
        let seatNumber = e.target.textContent;
        let td = button.parentNode;
        let index = [...td.parentNode.children].indexOf(td).toString();
        let sectors = ["A", "B", "C"];
        if (button.hasAttribute("style")) {
            outputArea.textContent += ` Seat ${seatNumber} in zone ${section} sector ${sectors[+index]} is unavailable.\n`
        } else {
            button.style.backgroundColor = "rgb(255,0,0)";
            outputArea.textContent += ` Seat ${seatNumber} in zone ${section} sector ${sectors[+index]} was taken.\n`;
            numOfFans++;
            profit += prices[section][index];
            
        }
       
    }
    function getMoneyAndFans(e) {
        let summarySpan = document.querySelector("#summary span");
        summarySpan.textContent = `${+profit} leva, ${numOfFans} fans.`
    }
}