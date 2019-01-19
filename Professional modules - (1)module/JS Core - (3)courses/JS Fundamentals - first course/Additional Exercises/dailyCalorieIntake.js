function solve(input, workouts) {
    let [sex, weight, height, age] = input;
    let af = 0;
    let calories = 0;

    switch (sex) {
        case 'm':   calories = 66 + 13.8 * weight + 5 * height - 6.8 * age;
            break;

        default:   calories = 655 + 9.7 * weight + 1.85 * height - 4.7 * age;
            break;
    }

    if (workouts < 1) {
        af = 1.2;
    } else if (workouts === 1 || workouts === 2) {
        af = 1.375;
    } else if (workouts >= 3 && workouts <= 5) {
        af = 1.55;
    } else if (workouts === 6 || workouts === 7) {
        af = 1.725;
    } else {
        af = 1.90;
    }


    console.log(Math.round(calories*af));
}