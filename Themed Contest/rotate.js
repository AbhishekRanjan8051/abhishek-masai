const rotateArray = function (nums, k) {
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  k %= nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums.join(" ");
};
function runProgram(input) {
  let newInput = input.split("\n");

  let [n, k] = newInput[0].split(" ").map(Number);
  let data = newInput[1].split(" ").map(Number);

  let final = rotateArray(data, k);
  console.log(final);
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`6 4
1 2 5 4 0 6`); //write test case here
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
