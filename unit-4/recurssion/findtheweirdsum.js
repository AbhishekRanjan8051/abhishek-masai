function findSum(data, N) {
  if (N <= 0) return 0;
  return findSum(data, N - 1) + data[N - 1];
}
function runProgram(input) {
  let newInput = input.split("\n");

  let testCase = +newInput[0];

  for (let a = 1; a <= testCase; a++) {
    let arr = newInput[2 * a].trim().split(" ").map(Number);
    let data = arr.sort();
    console.log('data:', data)

    let n = data.length - 1;
    let max = data[n];

    let output = findSum(data, n);

    if (max === output) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`3
3
1 4 3
4
0 1 2 3
4
2 3 6 10`); //write test case here
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
