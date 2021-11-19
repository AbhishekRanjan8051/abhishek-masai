function lowerbond(data, k) {
  let start = 0;
  let end = data.length - 1;
  let result = -1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (k == data[mid]) {
      result = mid;
      end = mid - 1;
    } else if (k < data[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
}
function runProgram(input) {
  let newInput = input.split("\n");

  let [n, k] = newInput[0].split(" ").map(Number);

  let data = newInput[1].split(" ").map(Number);
  let final = lowerbond(data, k);
  console.log(final);
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`5 2
1 1 2 2 5`); //write test case here
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
