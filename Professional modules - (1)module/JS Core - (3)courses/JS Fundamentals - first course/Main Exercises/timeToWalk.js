function solve(numOfSteps, stepsSize, speed) {
    let distance = numOfSteps * stepsSize;
    let rest = Math.floor(distance / 500) * 60;
    speed = speed / 3.6;
    let time = distance / speed + rest;

    let totalSeconds = time;
    let hours = Math.floor(totalSeconds / 3600);
    //totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = totalSeconds % 60;

    minutes = String(minutes).padStart(2, "0");
    hours = String(hours).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");

    console.log(`${hours}:${minutes}:${Math.ceil(seconds)}`)
}