function countWays(data) {
  var arr = [];
  arr.length = 10;

  arr[0] = arr[1] = arr[2] = 1;
  arr[3] = 2;

  for (var i = 4; i <= data; i++) {
    arr[i] = arr[i - 1] + arr[i - 3] + arr[i - 4];
  }

  return arr[data];
}
function runProgram(input) {
  let data = +input;

  let final = countWays(data);
  console.log(final);
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`5`); //write test case here
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
