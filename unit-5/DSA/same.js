function same(data, arr) {
  data.sort(function (a, b) {
    return a - b;
  });

  arr.sort(function (a, b) {
    return a - b;
  });
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    // i = 0
    for (let j = 0; j < arr.length; j++) {
      if (data[i] === arr[j]) {
        count++;
      }
    }
  }
  return count;
}
function runProgram(input) {
  let newInput = input.split("\n");

  let data = newInput[0].split("");
  console.log("data:", data);
  let arr = newInput[1].split("");
  console.log("arr:", arr);
  let final = same(data, arr);
  console.log(final);
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`AEDFHR
ABCDGH`); //write test case here
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
