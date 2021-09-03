function sumpointer(data, k) {
  data.sort(function (a, b) {
    return a - b;
  });
  let start = 0;
  let end = data.length - 1;

  let temp = 0;

  while (start < end) {
    if (data[start] + data[end] > k) {
      end--;
    } else if (data[start] + data[end] < k) {
      start++;
    } else {
      temp = 1;
      break;
    }
  }
  if (temp == 1) {
    return true;
  } else {
    return false;
  }
}

function runProgram(input) {
  var newInput = input.split("\n");

  var testCase = +newInput[0];

  for (var i = 1; i <= testCase; i++) {
    var [n, k] = newInput[2 * i - 1].trim().split(" ").map(Number);

    var data = newInput[2 * i].trim().split(" ").map(Number);

    var finalOutput = sumpointer(data, k);
    console.log(finalOutput);
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`1
    5 2
    3 4 0 2 7`); //write test case here
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
