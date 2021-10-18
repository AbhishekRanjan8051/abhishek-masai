function findSum(data, N) {
  if (N <= 0) return 0;
  return findSum(data, N - 1) + data[N - 1];
}
function runProgram(input) {
  let newInput = input.split("\n");

  let testCase = +newInput[0];

  for (let a = 1; a <= testCase; a++) {
    let data = newInput[2 * a].trim().split(" ").map(Number);
    let N = data.length;
    let sum = findSum(data, N);
    console.log(sum);
  }
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`3
5
6 3 8 2 -4
5
-10 -7 10 2 -2
5
-4 -5 6 -3 9`); //write test case here
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
