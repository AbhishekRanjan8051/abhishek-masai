function runProgram(input) {
  let newInput = input.split("\n");

  let data = newInput[1].split(" ").map(Number);
  let n = data.length;

  let even = 0;
  let odd = 0;
  for (let i = 0; i < n; i++) {
    if (data[i] % 2 == 0) {
      even = even + data[i];
    } else {
      odd = odd + data[i];
    }
  }
  if (even < odd) {
    console.log("Odd");
  } else {
    console.log("Even");
  }
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`4
  1 2 3 4`); //write test case here
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
