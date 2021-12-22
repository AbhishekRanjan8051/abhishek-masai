function minimal(data) {
  if (data[0] == 0) {
    for (let i = 0; i < data.length; i++) {
      if (data[i] > data[0]) {
        [data[0], data[i]] = [data[i], data[0]];
        return data.join("");
      }
    }
  } else {
    return data.join("");
  }
}

function runProgram(input) {
  let newInput = input.split("\n");
  let testCase = +newInput[0];
  for (let i = 1; i <= testCase; i++) {

    let data = newInput[i * 2].split(" ").map(Number);
    let sort = data.sort((a, b) => {
      return a - b;
    });
    console.log(minimal(sort));
  }
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`3
4
2 1 0 0
4
1 4 2 3
4
5 2 3 2`); //write test case here
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
