const [n] = (
  process.platform === "linux"
    ? require("fs").readFileSync("/dev/stdin").toString()
    : `ljes=njak`
)
  .trim()
  .split("\n");

function solution(n) {
  let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];
  for (let alphabet of croatia) {
    n = n.split(alphabet).join("N");
  }
  return console.log(n.length);
}

solution(n);
