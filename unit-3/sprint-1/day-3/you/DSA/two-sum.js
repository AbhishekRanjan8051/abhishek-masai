function runProgram(input) {
  var newInput = input.split("\n");

  let testCase = +newInput[0];

  for (let a = 1; a <= testCase; a++) {
    let data = newInput[a * 2].trim().split(" ").map(Number);

    let [n, k] = newInput[a * 2 - 1].trim().split(" ").map(Number);

    // console.log('k:', k)
    var start = 0;
    var end = data.length - 1;

    var sum = 0;
    var temp = false;
    while (start < end) {
      sum = data[start] + data[end];
      if (sum == k) {
        temp = true;
        console.log(start, end);
        break;
      } else if (sum > k) {
        end--;
      } else if (sum < k) {
        start++;
      } 
    }
    if (temp == false) {
      console.log(-1, -1);
    }
  }
}
if (process.env.USERNAME === "abhis") {
  runProgram(`3
  4 9
  2 7 11 15
  5 10
  1 2 3 5 5
  2 100
  48 49`); //write test case here
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
