function solve() {
    function containsQuery(array, query) {
        return array
            .filter(x => x.textContent.toLowerCase().includes(query))
            .map(x => array.indexOf(x));
    }

    let tdValues = [];
    Array.from(document.querySelectorAll('tbody tr td'))
        .forEach(x => tdValues.push(x));
    Array.from(document.querySelectorAll('tbody tr td'))
        .forEach((x, y) => x.setAttribute("id", y));
    document.getElementById("searchBtn").addEventListener("click", (e) => {
        Array.from(document.querySelectorAll("tbody tr"))
            .forEach(x => x.removeAttribute("class"));
        let searchQuery = document.getElementById("searchField").value.toLowerCase();
        if (searchQuery.length === 0) return;
        containsQuery(tdValues, searchQuery)
            .forEach(x => tdValues[x].parentElement.setAttribute("class", "select"));
        document.getElementById("searchField").value = "";
    })
}