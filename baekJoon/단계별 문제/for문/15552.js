const input = require("fs").readFileSync("15552.txt").toString().split("\n");

console.log(input);

for (let i = 0; i < input.length; i++) {
  if (parseInt(input[i].split(" ")[1])) {
    console.log(
      parseInt(input[i].split(" ")[0]) + parseInt(input[i].split(" ")[1])
    );
  }
}
