let input = require("fs").readFileSync("2439.txt").toString().split("");

for (let i = 0; i < input; i++) {
  let log = "";

  for (let j = input - 1; j >= 0; j--) {
    log += j <= i ? "*" : " ";
  }
  console.log(log);
}
