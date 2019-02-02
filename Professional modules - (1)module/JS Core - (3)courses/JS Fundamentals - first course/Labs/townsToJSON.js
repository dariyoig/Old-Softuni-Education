function solve(arr) {
    let json = [];

    for (let i = 1; i < arr.length; i++) {
        let splitted = arr[i].split(/[ ]*[|][ ]*/g);
        splitted = splitted.filter(x => x !== '');

        json.push(
            {
                "Town": splitted[0],
                "Latitude": parseFloat(splitted[1]),
                "Longitude": parseFloat(splitted[2])
            }
        )
    }

    console.log(JSON.stringify(json));
}
solve(
    ['| Town | Latitude | Longitude |',
        '| Veliko Turnovo | 43.0757 | 25.6172 |',
        '| Monatevideo | 34.50 | 56.11 |']

)