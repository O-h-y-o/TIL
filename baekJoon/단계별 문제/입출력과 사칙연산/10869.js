let input = require("fs").readFileSync("10869.txt").toString().split(" ");

const A = parseInt(input[0]);
const B = parseInt(input[1]);
console.log(A + B);
console.log(A - B);
console.log(A * B);
console.log(Math.floor(A / B));
console.log(A % B);
