function sumexistornot(data, n, k) {
  if (n == 0) {
    return false;
  }
  if (k === 0) {
    return true;
  }
  if (data[n - 1] > k) {
    return sumexistornot(data, n - 1, k);
  } else {
    return (
      sumexistornot(data, n - 1, k) ||
      sumexistornot(data, n - 1, k - data[n - 1])
    );
  }
}
function runProgram(input) {
  let newInput = input.split("\n");

  let n = +newInput[0];

  let data = newInput[1].split(" ").map(Number);
  //   console.log("data:", data);
  let k = +newInput[2];
  //   console.log("k:", k);

  let final = sumexistornot(data, n, k);
  //   console.log(final);
  if (final === true) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`9
1 2 3 4 5 6 7 8 9
5`); //write test case here
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
