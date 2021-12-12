const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length; i++) {
  let result =
    parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1]);

  if (result !== 0) {
    console.log(result);
  }
}

// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// for (let i = 0; i < input.length; i++) {
//   if (parseInt(input[i].split(" ")[0]) === 0) {
//     continue;
//   }
//   let result =
//     parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1]);
//   console.log(result);
// }
