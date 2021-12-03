function LoveOfSamosa(arr, k) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (sum + arr[i] <= k) {
      sum += arr[i];
      count++;
    } else {
      break;
    }
  }
  return count;
}
function runProgram(input) {
  let newInput = input.split("\n");

  let [n, k] = newInput[0].split(" ").map(Number);

  let data = newInput[1].split(" ").map(Number);
  data.sort(function (a, b) {
    return a - b;
  });

  let somasa = LoveOfSamosa(data, k);
  console.log(somasa);
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`4 10
5 4 2 4`); //write test case here
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
