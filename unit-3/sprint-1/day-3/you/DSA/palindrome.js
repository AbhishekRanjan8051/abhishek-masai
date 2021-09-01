function palindrome(data) {
  let string = data.toString();
  let start = 0;
  let end = string.length - 1;

  while (start < end) {
    if (string[start] != string[end]) {
      return false;
    }
    start++;
    end--;
  }
  return true;
}

function runProgram(input) {
  let data = +input;

  let output = palindrome(data);
  //   console.log("output:", output);
  if (output == true) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`122`); //write test case here
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
