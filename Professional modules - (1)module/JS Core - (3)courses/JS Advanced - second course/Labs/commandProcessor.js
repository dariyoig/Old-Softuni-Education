function solve(input) {

    let exe = modifyFunc();

    for (el of input) {
        let [command, para] = el.split(" ");
        switch (command) {
            case "append": exe.append(para);
                break;
            case "removeStart": exe.removeStart(para);
                break;
            case "removeEnd": exe.removeEnd(para);
                break;
            case "print": exe.print();
                break;
        }
    }
    function modifyFunc() {
        let string = "";

        return {
            "append": (str) => string += str,
            "removeStart": (n) => string = string.slice(n),
            "removeEnd": (n) => string = string.slice(0, string.length - n),
            "print": () => console.log(string)
        }
    }

}
solve(
    ['append 123', 'append 45', 'removeStart 2', 'removeEnd 1', 'print']
);