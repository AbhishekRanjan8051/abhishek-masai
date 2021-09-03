let colors1 = ["red", "green", "blue"];

let colors2 = ["voilet", "yellow", "orange"];

let colors = [...colors1, ...colors2];
console.log("colors:", colors);

// 2nd Way

const user = {
  name: "abhishek",
  age: 21,
};

const city = {
  city: "samastipur",
};

let address = { ...user, ...city };
console.log("address:", address);

// third ways

let vowels = ["a", ..."eio", "u"];
console.log("vowels:", vowels);
