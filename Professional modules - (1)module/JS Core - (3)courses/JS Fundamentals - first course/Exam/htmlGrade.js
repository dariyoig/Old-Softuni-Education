function solve(examPoints, homeworkCompleted, totalHomework) {
    let maxPoints = 100;
    let maxExamPoints = 400;

    let percents = examPoints / maxExamPoints * 100;

    let hwPercents = homeworkCompleted / totalHomework * 100;
    //console.log(hwPercents);
    let hwPoints = (maxPoints * 0.1) * (hwPercents / 100);
    //console.log(hwPoints);
    let totalPoints = (maxPoints * 0.9) * (percents / 100) + hwPoints;

    let grade = 0;

    if (examPoints === 400) {
        console.log('6.00');
    }
    grade = Number(3 + 2 * (totalPoints - maxPoints / 5) / (maxPoints / 2));
    

    if (grade > 6) {
        console.log('6.00');;
    }else{
        console.log(grade.toFixed(2));
    }
}
solve(290, 10, 10);