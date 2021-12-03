function firstoccurence(data, k) {
  let high = data.length - 1;
  let low = 0;

  while (low <= high) {
    let mid = low + (high - low) / 2;

    if ((mid == 0 || k > data[mid - 1]) && data[mid] == k) {
      return mid;
    } else if (k > data[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
function runProgram(input) {
  let newInput = input.split("\n");

  let data = newInput[1].trim().split(" ").map(Number);

  let k = +newInput[2];

  let show = firstoccurence(data, k);
  console.log('show:', show)
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`6
1 1 1 2 2 2	
1`); //write test case here
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
