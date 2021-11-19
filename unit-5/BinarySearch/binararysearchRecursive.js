function searchArr(data, start, end, k) {
  data.sort((a, b) => {
    return a - b;
  });

  if (start <= end) {
    let mid = Math.floor(start + end / 2);

    if (data[mid] == k) {
      return 1;
    }

    if (data[mid] < k) {
      return searchArr(data, mid + 1, end, k);
    } else {
      return searchArr(data, start, mid - 1, k);
    }
  } else {
    return -1;
  }
}
function runProgram(input) {
  let newInput = input.split("\n");

  let [n, k] = newInput[0].split(" ").map(Number);
  let data = newInput[1].split(" ").map(Number);
  //   console.log("data:", data);

  let final = searchArr(data, 0, n, k);
  console.log(final);
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`5 0
2 -2 0 3 4`); //write test case here
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
