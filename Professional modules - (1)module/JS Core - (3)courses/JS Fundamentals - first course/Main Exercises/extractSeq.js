function extract(input){
    let max=input[0];
    console.log(input.filter((a) =>a>=max && (max=a)===a).join('\n'));
}
solve(
    [1,
        3,
        8,
        44,
        10,
        12,
        3,
        2,
        24]
);