function solve(formatter) {
    return (value) => {
        return formatter(",", "$", true, value);
    }
}

//Short version 
formatter => value => formatter(",", "$", true, value);
