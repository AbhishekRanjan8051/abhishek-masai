function binarysearch(data, k) {
  let start = 0;
  let end = data.length - 1;

  while (start <= end) {
    // Find the mid index
    let mid = Math.floor((start + end) / 2);

    if (data[mid] === k) return true;
    else if (data[mid] < k) start = mid + 1;
    else end = mid - 1;
  }

  return false;
}
function runProgram(input) {
  let newInput = input.split("\n");

  let [n, k] = newInput[0].split(" ").map(Number);
  //   console.log("k:", k);
  let data = newInput[1].trim().split(" ").map(Number);
  //   console.log("data:", data);
  let final = binarysearch(data, k);
  //   console.log("final:", final);
  if (final == true) {
    console.log("1");
  } else {
    console.log("-1");
  }
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`5 0
2 -2 3 0 4`); //write test case here
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
