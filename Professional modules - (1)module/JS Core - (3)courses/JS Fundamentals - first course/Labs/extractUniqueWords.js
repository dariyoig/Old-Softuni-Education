function solve(input) {
    let arr = [];
    for (let el of input) {
        el = el.match(/[A-Za-z]+/g)
        for (let word of el) {
            let index = arr.indexOf(word.toLowerCase());
            if (index > -1) {

            } else {
                arr.push(word.toLowerCase());
            }
        }
    }
    console.log(arr.join(", "));
}
solve([

    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Pellentesque quis hendrerit dui.',
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla.',
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis.',
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut.',
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu.Integer ac turpis commodo, varius nulla sed, elementum lectus.',
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.'
])