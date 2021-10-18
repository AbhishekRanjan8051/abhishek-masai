function findLength(data) {
  if (data == "") {
    return 0;
  } else {
    return findLength(data.substring(1)) + 1;
  }
}

function runProgram(input) {
  let data = input;

  let result = findLength(data);
  console.log(result);
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`masaischool`); //write test case here
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
