function solve(formatter) {
    return (value) => {
        return formatter(",", "$", true, value);
    }
}
