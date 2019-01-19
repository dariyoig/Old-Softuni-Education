function solve(first, second, third) {
    let largest = 0;
    if (first > second && first > third) {
        largest = first;
    } else if (second > first && second > third) {
        largest = second;
    } else if (third > second && third > first) {
        largest = third;
    }
    console.log(`The largest number is ${largest}.`);

}