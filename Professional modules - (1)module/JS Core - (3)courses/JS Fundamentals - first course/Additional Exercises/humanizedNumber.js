
//NOT WORKING PROPERLY

function solve(input) {
    let split = input.split(' ');

    for (let i = 0; i < split.length; i++) {
        let currentEl = split[i];
        let currentAscii = currentEl.charCodeAt();
        if (currentAscii >= 49 && currentAscii <= 57) {
            let num = currentEl;
            switch (num) {
                case '1': console.log(num + 'st');
                    break;
                case '2': console.log(num + 'nd');
                    break;
                    case '3': console.log(num + 'rd');
                    break;
                default: console.log(num + 'th')
                    break;
            }

        }
    }
}