function lowerbond(data, k) {
  let low = 0;
  let high = data.length - 1;

  let ans = -1;

  while (low <= high) {
    let mid = low + (high - low) / 2;
    if (data[mid] == k) {
      ans = mid;
      high = mid - 1;
    } else if (data[mid] > k) {
      high = mid - 1;
    } else {
      low = mid - 1;
    }
  }
  return ans;
}
function upperbond(data, k) {
  let low = 0;
  let high = data.length - 1;
  let ans = -1;

  while (low <= high) {
    let mid = low + (high - low) / 2;
    if (data[mid] == k) {
      let ans = mid;
      low = mid + 1;
    } else if (data[mid] > k) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return ans;
}
function frequency(data, k) {
  let lower = lowerbond(data, k);
  let upper = upperbond(data, k);

  if (lower == -1) {
    return 0;
  }
  let ans = upper - lower + 1;
  return ans;
}
function runProgram(input) {
  let newInput = input.split("\n");

  let [n, k] = newInput[0].split(" ").map(Number);
  //   console.log("k:", k);

  let data = newInput[1].split(" ").map(Number);
  //   console.log("data:", data);

  let final = frequency(data, k);
  console.log(final);
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`6 3
2 3 3 3 6 9`); //write test case here
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
