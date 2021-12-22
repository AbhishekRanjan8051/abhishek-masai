function runProgram(input) {
  var newInput = input.split("\n");

  var LK = newInput[0].split(" ").map(Number);
  var data = newInput[1].split(" ").map(Number);

  var K = Number(LK[1]);
  var n = data.length;

  var MOD = K % n;

  var result = "";
  for (var j = 0; j <=  MOD-1 ; j++) {
    result += data[j] + " ";
  }

  var output = "";
  for (var k = MOD; k <= n - 1; k++) {
    output += data[k] + " ";
  }

  console.log(output + result);
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`6 4
1 2 5 4 0 6`); //write test case here
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
