//한 줄 입력

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split(' ');

//여러 줄 입력

// let fs = require('fs');
// let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let input = require("fs").readFileSync("a.txt").toString().split("\n");
let count = Number(input[0]);
let answerStr = "";

for (let i = 1; i <= count; i++) {
  let num = input[i].split(" ");
  answerStr += Number(num[0]) + Number(num[1]) + "\n";
}

console.log(answerStr);
