function quicksorting(data) {
  if (data.length == 1) {
    return data;
  }
  let res = data[data.length - 1];
  let left = [];
  let right = [];
  for (let i = 0; i < data.length - 1; i++) {
    if (data[i] < res) {
      left.push(data[i]);
    } else {
      right.push(data[i]);
    }
  }
  if (left.length > 0 && right.length > 0) {
    return [...quicksorting(left), res, ...quicksorting(right)];
  } else if (left.length > 0) {
    return [...quicksorting(left), res];
  } else {
    return [res, ...quicksorting(right)];
  }
}

function runProgram(input) {
  let newInput = input.split("\n");
  let data = newInput[1].split(" ").map(Number);
//   console.log("data:", typeof data);

  console.log(...quicksorting(data));
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`5
8 3 9 0 5`); //write test case here
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
  });

  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
