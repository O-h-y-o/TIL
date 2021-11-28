let input = require("fs").readFileSync("9498.txt").toString();

const examScore = Number(input);

if (examScore >= 90) return console.log("A");
if (examScore >= 80) return console.log("B");
if (examScore >= 70) return console.log("C");
if (examScore >= 60) return console.log("D");
if (examScore < 60) return console.log("F");
