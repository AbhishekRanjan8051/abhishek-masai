function runProgram(input) {
  let newInput = input.trim().split("\n");
  let testCase = Number(newInput[0]);
  for (let a = 1; a <= testCase; a++) {
    let data = newInput[2 * a].trim().split(" ").map(Number);

    let stack = [];
    let stack1 = [];
    let result = "";

    for (let i = data.length - 1; i >= 0; i--) {
      while (stack[stack.length - 1] <= data[i]) {
        stack.pop();
      }
      if (stack.length === 0) {
        stack1.push(-1);
      } else {
        stack1.push(stack[stack.length - 1]);
      }

      stack.push(data[i]);
    }
    for (let j = stack1.length - 1; j >= 0; j--) {
      result += stack1[j] + " ";
    }
    console.log(result);
  }
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`1
  4
1 3 2 4`); //write test case here
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
