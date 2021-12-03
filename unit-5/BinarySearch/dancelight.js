function dancelight(data, arr) {
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (data[i] == arr[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
}

function runProgram(input) {
  let newInput = input.split("\n");

  let testCase = +newInput[0];

  for (let a = 1; a <= testCase; a++) {
    let [b, g] = newInput[a+3].split(" ").map(Number);

  }
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`1
4 5
2 5 6 8
3 8 5 1 7`); //write test case here
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
