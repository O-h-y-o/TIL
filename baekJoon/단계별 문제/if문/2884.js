let input = require("fs").readFileSync("2884.txt").toString().split(" ");

let hour = parseInt(input[0]);
let minute = parseInt(input[1]);

minute = 60 - (45 - minute);

if (minute === 60) {
  hour++;
  minute = 0;
}

if (minute > 60) {
  minute = minute - 60;
  hour++;
}

if (hour === 0) {
  hour = 24;
}

console.log(hour - 1 + " " + minute);

// let Hour = Number(input[0]); // Hour
// let Minute = Number(input[1]); // Minute

// Minute -= 45;

// if (Minute < 0) {
//   Minute += 60;
//   Hour--;

//   if (Hour === -1) {
//     Hour = 23;
//   }
// }

// console.log(Hour + " " + Minute);
