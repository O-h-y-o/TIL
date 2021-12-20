const [n] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `500`
)
  .trim()
  .split("\n");

function solution(n) {
  let N = Number(n);

  let count = 0;
  for (let i = 1; i <= N; i++) {
    if (i < 100) {
      count++;
      continue;
    }

    let A = Number(String(i)[1]) - Number(String(i)[0]);
    let B = Number(String(i)[2]) - Number(String(i)[1]);

    if (A === B) {
      count++;
    }
  }
  return console.log(n);
}

solution(n);
