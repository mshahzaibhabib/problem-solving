'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {
    for (let index = 1; index <= n; index++) {
        let log = '';
        for (let i = 0; i < n; i++) {
            if (i < n - index) log += ' ';
            else log += '#';
        }
        console.log(log);
    }
}

function main() {
    const n = parseInt(readLine(), 10);

    staircase(n);
}
