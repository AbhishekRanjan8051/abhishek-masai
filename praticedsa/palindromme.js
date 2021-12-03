function palindrome(data) {
  let n = data.length;

  for (let i = 0; i < n / 2; i++) {
    if (data[i] != data[n - i - 1]) {
      return false;
    } else {
      return true;
    }
  }
}

function runProgram(input) {
  let data = input;

  if (palindrome(data) === true) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`1211`); //write test case here
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
