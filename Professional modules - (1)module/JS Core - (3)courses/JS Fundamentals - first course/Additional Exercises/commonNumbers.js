function solve(firstArr, secondArr, thirdArr) {
    let common = [];

    for (let i = 0; i < firstArr.length; i++) {
        let currentNum = firstArr[i];
        if (secondArr.includes(currentNum) && thirdArr.includes(currentNum)) {
            common.push(currentNum);
        }
    }
    let sorted = common.sort((a, b) => a - b);
    let lowMiddle = Math.floor((sorted.length - 1) / 2);
    let highMiddle = Math.ceil((sorted.length - 1) / 2);
    let median = (sorted[lowMiddle] + sorted[highMiddle]) / 2;

    let average = getAverage(sorted);

        console.log(`The common elements are ${sorted.join(', ')}.`);
        console.log(`Average: ${average}.`);
        console.log(`Median: ${median}.`);


    function getAverage(arr) {
        let sum = 0;
        let result = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += +arr[i];
        }
        result = sum / arr.length;
        return result;
    }
    function getLongestArr(arr1, arr2, arr3) {
        if (arr1.length > arr2.length && arr1.length > arr3.length) {
            return arr1;
        } else if (arr2.length > arr1.length && arr2.length > arr3.length) {
            return arr2;
        } else if (arr3.length > arr1.length && arr3.length > arr2.length) {
            return arr3;
        } else {
            return arr1;
        }
    }
}