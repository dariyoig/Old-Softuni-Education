function solve() {
    Array.from(document.querySelectorAll("fieldset button")).forEach(x => x.addEventListener("click", click));
    document.querySelector("section>button:first-of-type").addEventListener("click", endDay);

    let garage = {};
    let backup = [];
    function click(e) {

        let button = e.target;

        switch (button.textContent) {
            case 'Add new truck':
                let plate = document.getElementById("newTruckPlateNumber").value;
                let tires = document.getElementById("newTruckTiresCondition").value;
                if (!garage.hasOwnProperty(plate)) {
                    garage[plate] = {
                        "tires": tires.split(" "),
                        "distance": 0
                    }
                    let div = document.createElement("div");
                    let parent = document.querySelector("section:nth-of-type(2) fieldset:nth-of-type(2) div");
                    div.setAttribute("class", "truck");
                    div.textContent = plate;
                    parent.appendChild(div);
                }
                break;

            case 'Add new tires':
                let div = document.createElement("div");
                let parent = document.querySelector("section:nth-of-type(2) fieldset:nth-of-type(1) div");
                let backupTires = document.getElementById("newTiresCondition").value;
                backup.push(backupTires);
                div.setAttribute("class", "tireSet");
                div.textContent = backupTires;
                parent.appendChild(div);
                break;

            case 'Go to work':
                let plateNumber = document.getElementById("workPlateNumber").value;
                let distance = document.getElementById("distance").value;
                let tireCheck = true;
                for (let tire of garage[plateNumber].tires) {
                    if (tire < distance / 1000) {
                        tireCheck = false;
                    }
                }
                if (tireCheck && garage.hasOwnProperty(plateNumber)) {
                    garage[plateNumber].tires = garage[plateNumber].tires.map(x => x - distance / 1000);
                    garage[plateNumber].distance += +distance;
                } else {
                    //todo
                }
                break;

        }
    }


    function endDay(e) {
        let textArea = document.querySelector("textarea");
        for (let key in garage) {
            textArea.textContent += `Truck ${key} has traveled ${garage[key].distance}.\n`
        }
        textArea.textContent += `You have ${backup.length} sets of tires left.\n`
    }
}