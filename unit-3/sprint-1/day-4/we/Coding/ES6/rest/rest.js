// print rest argument

const user = {
  name: "raj",
  age: 36,
  city: "San Francisco",
};

const { name, ...rest } = user;
console.log("rest:", rest);

//output =   rest: { age: 36, city: 'San Francisco' }

//rest use in function

function printarray(...array) {
  console.log("array:", array);

  //output = array: [ 10, 20, 30 ]

  let sum = 0;

  for (let num of array) {
    sum += num;
  }
  console.log("sum:", sum);

  //output = sum: 60
}
printarray(10, 20, 30);
