var e = 1;
var x = 1;

function eToThePowerX(data, n) {
  if (n === 0) {
    return 1;
  }

  let result = eToThePowerX(data, n - 1);

  e = e * data;
  x = x * n;

  return result + e / x;
}
function runProgram(input) {
  let [e, x] = input.split(" ").map(Number);

  let result = eToThePowerX(e, x).toFixed(4);
  console.log(result);
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`4 2`); //write test case here
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
