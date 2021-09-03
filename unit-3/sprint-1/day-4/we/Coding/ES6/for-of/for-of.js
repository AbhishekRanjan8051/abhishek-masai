let arr = [1, 2, 3, 4, 5];

//general syntax of for statement

for (var i = 0; i < arr.length; i++) {
  console.log("i:", arr[i]);
}

//for/of use insted of for loop in
for (let x of arr) {
  console.log("x:", x);
}


let string = "masai"

for (let j of string) {
    console.log('j:', j)
    
}