const user = {
  name: "John",
  age: 21,
  city: "San Francisco",
};

//normal ways or ES5 ways

// let name = user.name;
// console.log('name:', name)
// let age = user.age
// console.log('age:', age)

//destructuring ways or ES6 ways

/*
let { name, age } = user;
console.log('age:', age)
console.log('name:', name)

console.log(name,age);

*/

//destructuring in function

function printResult({ name, age }) {
  console.log(name, age);
}

printResult(user);
