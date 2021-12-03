function beyondfactorial(data) {
  if (data === 1) {
    return 0;
  }
  return beyondfactorial(data - 1) + Math.log(data);
}
function runProgram(input) {
  let data = +input;

  let result = beyondfactorial(data).toFixed(4);
  console.log("result:", result);
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`3`); //write test case here
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
