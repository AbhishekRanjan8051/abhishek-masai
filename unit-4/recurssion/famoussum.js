function sum(data) {
  if (data.length == 0) {
    return 0;
  } else if (data.length == 1) {
    return Number(data);
  }
 let start = 0;
  for (i = 0; i < data.length; i++) {
    start = start + Number(data.charAt(i));
  }
  return sum(String(start));
}
function runProgram(input) {
  let [n, k] = input.split(" ");
  let ans = sum(String(n));
  ans = ans * k;
  console.log(sum(String(ans)));
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`123 3`); //write test case here
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
