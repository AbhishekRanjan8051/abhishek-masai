function nickhacks(data, nick) {
  if (data == nick) {
    return "Yes";
  }
  if (nick > data) {
    return "No";
  } else {
    return nickhacks(data, nick * 10) || nickhacks(data, nick * 20);
  }
}
function runProgram(input) {
  let newInput = input.split("\n");
  let testCase = +newInput[0];

  for (let a = 1; a <= testCase; a++) {
    let data = +newInput[a];
    let nick = 1;
    let result = nickhacks(data, nick);
    console.log(result);
  }
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`5
1
2
10
25
200`); //write test case here
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
