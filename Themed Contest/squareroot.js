function squareroot(data) {
  if (data == 0 || data == 1) {
    return data;
  }

  let i = 1;
  let result = 1;

  while (result <= data) {
    i++;
    result = i * i;
  }
  return i - 1;
}
function runProgram(input) {
  let newInput = input.split("\n");
  let testCase = +newInput[0];

  for (let a = 1; a <= testCase; a++) {
    let data = +newInput[a];
    let final = squareroot(data);
    console.log(final);
  }
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`2
4
8`); //write test case here
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
