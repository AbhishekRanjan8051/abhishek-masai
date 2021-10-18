function numberofways(dist) {
  if (dist < 0) return 0;
  if (dist == 0) return 1;

  return (
    numberofways(dist - 1) + numberofways(dist - 2) + numberofways(dist - 3)
  );
}
function runProgram(input) {
  let data = +input;

  let result = numberofways(data);
  console.log(result);
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`4`); //write test case here
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
