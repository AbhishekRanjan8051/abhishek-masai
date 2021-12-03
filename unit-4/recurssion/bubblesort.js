function Solve(N, arr) {
  if (N == 1) return;

  for (var i = 0; i < N - 1; i++)
    if (arr[i] > arr[i + 1]) {
      // swap arr[i], arr[i+1]
      var temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }

  Solve(arr, N - 1);
}
function runProgram(input) {
  let newInput = input.split("\n");

  let N = +newInput[0];

  let data = newInput[1].trim().split(" ").map(Number);
 
  console.log("data:", typeof data);

  let sort = Solve(N, data);
  console.log("sort:", sort);
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`5
3 5 0 9 8`); //write test case here
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
