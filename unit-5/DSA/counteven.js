function evennum(data) {
  let res = "";
  let count = 0;

  for (i = 0; i < data.length; i++) {
    for (j = i; j < data.length; j++) {
      if (data[j] % 2 == 0) {
        count++;
      }
    }
  }
  return count;
}
function runProgram(input) {
  let data = input.split("").map(Number);
  console.log("data:", data);
  let final = evennum(data);
  console.log("final:", final);
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`574674546476`); //write test case here
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
