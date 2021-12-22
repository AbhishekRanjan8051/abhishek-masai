function nextsmallerelement(data) {
  let result = [];
  let stack = [];

  for (let i = 0; i < data.length; i++) {
    result.push(-1);
  }

  for (let j = 0; j < data.length * 2; j++) {
    let num = data[j];
    while (stack.length && data[stack[stack.length - 1]] > num) {
      result[stack.pop()] = num;
    }
    if (j < data.length) {
      stack.push(j);
    }
  }
  return result.join(" ");
}
function runProgram(input) {
  let newInput = input.split("\n");

  let testCase = +newInput[0];

  for (let a = 1; a <= testCase; a++) {
    let data = newInput[2 * a].split(" ").map(Number);
    let fial = nextsmallerelement(data);
    console.log('fial:', fial)
  }
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`1
8
39 27 11 4 24 32 32 1`); //write test case here
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
