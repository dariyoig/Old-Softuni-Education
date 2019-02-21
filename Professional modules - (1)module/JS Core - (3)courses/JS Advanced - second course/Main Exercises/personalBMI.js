function solve(name, age, weight, height) {

    let bmi = Math.round(weight / ((height/100)*(height/100)));
    let status;
    if (bmi <18.5) status = 'underweight';
    else if (bmi >= 18.5 && bmi < 25) status = 'normal';
    else if (bmi >= 25 && bmi < 30) status = "overweight";
    else if (bmi >= 30) status ="obese";

    let chart = {'name': name};
    chart.personalInfo = {
        'age': age,
        'weight': weight,
        'height': height
    }
    chart.BMI = bmi;
    chart.status = status;
    if (status === 'obese') {
        chart.recommendation = "admission required";
    }

    return chart;
}