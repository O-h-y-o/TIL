let input = require("fs").readFileSync("2588.txt").toString().split("\n");

const A = Number(input[0]);
const B = input[1].split("");

const firstB = B[0];
const secondB = B[1];
const lastB = B[2];

const C = Number(input[1]);

console.log(A * Number(lastB));
console.log(A * Number(secondB));
console.log(A * Number(firstB));
console.log(A * C);
