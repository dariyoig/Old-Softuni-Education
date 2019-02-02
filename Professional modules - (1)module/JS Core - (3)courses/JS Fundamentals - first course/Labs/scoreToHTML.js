function solve(input) {
    let arr = JSON.parse(input);
    let table = "<table>\n<tr><th>name</th><th>score</th></tr>\n"
    //console.log(table);
    arr.forEach(element => {
        let name = element.name;
        let score = element.score;
        table += `<tr><td>${escapeHtml(name)}</td><td>${score}</td></tr>`;
        table += "\n";
    });
    table += '</table>';
    console.log(table);
    function escapeHtml(unsafe) {
        return unsafe
             .replace(/&/g, "&amp;")
             .replace(/</g, "&lt;")
             .replace(/>/g, "&gt;")
             .replace(/"/g, "&quot;")
             .replace(/'/g, "&#39;");
     }
}
solve(
    [{"name":"<div>a && 'b'</div>","score":111},{"name":"Jichka Jochkova","score":-50}]
);