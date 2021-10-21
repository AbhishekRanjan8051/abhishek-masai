function subsequence(str, index, result) {
  let n = str.length;
  if (index == n) {
    return;
  }
  if (result != "") {
    console.log(result);
  }

  for (let i = index + 1; i < n; i++) {
    result += str[i];
    subsequence(str, i, result);

    result = result.substring(0, result.length - 1);
  }
}

function runProgram(input) {
  var newData = input.split("\n");

  let str = newData[1];
  let index = -1;
  let result = "";

  subsequence(str, index, result);
}

if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`4
abcd`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  var read = "";
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
