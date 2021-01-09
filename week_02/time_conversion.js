'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(str => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the timeConversion function below.
 */
function timeConversion(s) {
    // boolean representing AM/PM
    let isAM = s.substr(s.length - 2, s.length) === ("AM" || "am");
    // time with AM/PM removed
    let time = s.substr(0, s.length - 2);
    // number representing only hours
    let hours = time.substr(0, 2);

    let newHour = 0;

    if (!isAM) {
        if (hours === '12') newHour = hours;
        else newHour = parseInt(hours) + 12;
        return `${time.replace(hours, newHour.toString())}`;

    } else if (isAM) {
        if (hours === '12') newHour = '00';
        else newHour = hours;
        return `${time.replace(hours, newHour.toString())}`;
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    let result = timeConversion(s);

    ws.write(result + "\n");

    ws.end();
}
