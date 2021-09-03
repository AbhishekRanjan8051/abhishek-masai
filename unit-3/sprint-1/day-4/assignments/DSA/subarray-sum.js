function subarray_sum(data, k) {
  let sum = 0;

  let count = 0;

  let start = 0;

  let end = data.length - 1;

  while (start < data.length && data[start] % k == 0) {
    ++start;
  }

  while (end >= 0 && data[end] % k == 0) {
    --end;
  }

  for (let i = start; i <= end; i++) {
    sum += data[i];
  }
  if (sum % k != 0) {
    count++;
  }
  return count;
}

function runProgram(input) {
  let newInput = input.split("\n");

  let [n, k] = newInput[0].split(" ").map(Number);

  let data = newInput[1].trim().split(" ").map(Number);
  //   console.log('data:', data)

  let output = subarray_sum(data, k);
  console.log("output:", output);
}
if (process.env.USERNAME === "abhis") {
  runProgram(`4 3
  2 3 4 6`); //write test case here
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

