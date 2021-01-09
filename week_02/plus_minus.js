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

// Complete the plusMinus function below.
function plusMinus(arr) {

	let positiveNumber = 0;
	let negativeNumber = 0;
	let zeros = 0;

	for (let index = 0; index < arr.length; index++) {
		if (arr[index] > 0) positiveNumber++;
		else if (arr[index] < 0) negativeNumber++;
		else if (arr[index] === 0) zeros++;
	}

	console.log(Number.parseFloat(positiveNumber / arr.length).toFixed(6));
	console.log(Number.parseFloat(negativeNumber / arr.length).toFixed(6));
	console.log(Number.parseFloat(zeros / arr.length).toFixed(6));
}

function main() {
	const n = parseInt(readLine(), 10);

	const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

	plusMinus(arr);
}
