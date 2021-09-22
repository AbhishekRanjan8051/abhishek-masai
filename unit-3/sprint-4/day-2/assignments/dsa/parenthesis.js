function StringWithParenthesis(str) {
  let stack = [];
  

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(" || str[i] == "[" || str[i] == "{") {
      stack.push(str[i]);
      continue;
    }

    

    let check = "";

    switch (str[i]) {
      case ")":
        check = stack.pop();
        if (check == "{" || check == "[") return false;
        break;

      case "}":
        check = stack.pop();
        if (check == "(" || check == "[") return false;
        break;

      case "]":
        check = stack.pop();
        if (check == "(" || check == "{") return false;
        break;
    }
  }

  return stack.length == 0;
}

// function valid(data) {
//   let bracket = {
//     "(": ")",
//     "{": "}",
//     "[": "]",
//   };

//   let stack = [];

//   for (let i of data) {
//     if (bracket[i]) {
//       stack.push(bracket[i]);
//     } else {
//       if (stack.pop() !== i) return false;
//     }
//   }
//   return stack.length !=0;
// }

function runProgram(input) {
  let newInput = input.split("\n");

  let testCase = +newInput[0];

  for (let a = 1; a <= testCase; a++) {
    let data = newInput[a].split(" ").map(Number);

    if (StringWithParenthesis(data)) {
      console.log("balanced");
    } else {
      console.log("unbalanced");
    }

    // let final = valid(data);
    // console.log('final:', final)

  }
}

if (process.env.USERNAME === "ABHISHEK RANJAN") {
  runProgram(`3
{([])}
()
([]`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  var read = "";
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
