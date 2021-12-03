function findbinary(data) {
  if (data === 0) {
    return 0;
  } else {
    return (data % 2) + 10 * findbinary(parseInt(data / 2));
  }
}
function runProgram(input) {
  let newInput = input.split("\n");
  let testCase = +newInput[0];

  for (let a = 1; a <= testCase; a++) {
    let data = +newInput[a];
    let binary = findbinary(data);
    console.log(binary);
  }
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`2
15
128`); //write test case here
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
