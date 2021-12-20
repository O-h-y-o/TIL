const [n] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `1 1 `
)
  .trim()
  .split("\n");

function solution(n) {
  let num = n.split(" ");
  return n === `` ? console.log(0) : console.log(num.length);
}

solution(n);
