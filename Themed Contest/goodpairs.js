function goodpairs(data) {
  let count = 0;

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[i] == 2 * data[j]) {
        count++;
      }
    }
  }
  if (count == 0) {
    return 0;
  } else {
    return count - 1;
  }
}
function runProgram(input) {
  let newInput = input.split("\n");
  let testCase = +newInput[0];

  for (let a = 1; a <= testCase; a++) {
    let data = newInput[2 * a].split(" ").map(Number);
    let final = goodpairs(data);
    console.log( final);
  }
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`2
5
1 1 1 1 1
6
1 1 2 2 4 1 `); //write test case here
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
