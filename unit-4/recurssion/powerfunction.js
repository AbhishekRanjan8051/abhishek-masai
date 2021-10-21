function power(x, y) {
  if (y == 0) {
    return 1;
  }  else {
    return x * power(x, y-1);
  }
}

function runProgram(input) {
  let [x, y] = input.split(" ").map(Number);

  let result = power(x, y);
  console.log(result);
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`2 4`); //write test case here
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
