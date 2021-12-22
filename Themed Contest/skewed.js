function checkFactors(N) {
  let even = 0,
    odd = 0;


  for (let i = 1; i <= Math.sqrt(N) + 1; i++) {
    if (N % i == 0) {
      if (i == Math.floor(N / i)) {
        if (i % 2 == 0) even += 1;
        else odd += 1;
      } else {
        if (i % 2 == 0) even += 1;
        else odd += 1;
        if (Math.floor(N / i) % 2 == 0) even += 1;
        else odd += 1;
      }
    }
  }

  if(even>odd) {
      return "Even Skewed";
  }if(odd>even) {
      return "Odd Skewed";
  } if(even==odd) {
      return "Not Skewed";
  }
 
}
function runProgram(input) {
  let newInput = input.split("\n");

  let testCase = +newInput[0];

  for (let a = 1; a <= testCase; a++) {
    let num = +newInput[a];
    let final = checkFactors(num);
    console.log( final)
  }
}
if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`3
4
6
11
`); //write test case here
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
