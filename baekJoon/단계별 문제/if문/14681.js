// let input = require("fs").readFileSync("14681.txt").toString().split(" ");

// const A = parseInt(input[0]);
// const B = parseInt(input[1]);

// if (A > 0 && B > 0) return console.log(1);
// if (A > 0 && B < 0) return console.log(4);
// if (A < 0 && B > 0) return console.log(2);
// if (A < 0 && B < 0) return console.log(3);

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
rl.on("line", function (line) {
  input.push(parseInt(line));
}).on("close", function () {
  const A = input[0];
  const B = input[1];

  if (A > 0 && B > 0) return console.log(1);
  if (A > 0 && B < 0) return console.log(4);
  if (A < 0 && B > 0) return console.log(2);
  if (A < 0 && B < 0) return console.log(3);
});
