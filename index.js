// console.log("Start");

function myFunction(params) {
  //   console.log("Start");
}

function myFunction3(x, y) {
  console.log(x, y);
}

function sayName(x) {
  console.log(`Hello, Welcome back ${x}`);
}

let x = 6;
function doMath(x) {
  if (x === undefined) {
    console.log("Please enter a value");
  } else {
    console.log(x * 2);
  }
}

// doMath(x);

function name1() {
  let el = [];
  for (let x = 0; x < arguments.length; x++) {
    el.push(arguments[x]);
  }

  return el.reduce((a, b) => {
    return a + b;
  });
}
// console.log(name1(4, 5, 6, 7, 5));

function name2() {
  let el = 0;

  for (let i = 0; i < arguments.length; i++) {
    el += arguments[i];
  }

  return el;
}

// console.log(name2(3, 7, 1));

function name2() {
  let el = [];

  for (let i = 0; i < arguments.length; i++) {
    el.push(arguments[i]);
  }
  return parseInt(el.reverse().join(""));
}

// console.log(name2(9, 4, 6, 7));

function userHeight(x) {
  if (x > 70) {
    console.log("You are Tall");
  } else {
    console.log("You are short");
  }
}

// userHeight(100);

function check() {
  max = Infinity;

  for (let i = 0; i < arguments.length; i++) {
    if (arguments[i] < max) {
      max = arguments[i];
    }
  }
  return max;
}

// console.log(check(1, 5, 3, 9, 6, 20, 0));
// console.log(Infinity);

// const readLine = require("readline");

// const rl = readLine.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let calling = "";

// rl.question("What are you doing?", (el) => {
//   calling = el;
// });

let xx = 6;
xx = 9;

// console.log("You have called: ", calling);

const prompt = require("prompt-sync")();

// let name = prompt("What is your name: ");

// console.log("What a beautiful Name: ", name);

function inputData() {
  let input1 = parseInt(prompt("Enter your first Number: "));
  let input2 = parseInt(prompt("Enter your second Number: "));

  console.log(input1 + input2);
}

// inputData();

class Build {
  constructor(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
  }

  log() {
    console.log(`display ${this.name}`);
  }
}

let build = new Build("Peter", "fair", 10);

// build.log();
// const joshua = { name: "joshua", age: 6, color: "dark" };
const moji11 = { name: "moji", age: 10, color: "black" };
// moji.name = "Shola";
// console.log(build.name);
// console.log(moji);
// console.log(Object.entries(moji));

function bola(x) {
  const moji = { name: "moji", age: 10, color: "black", score: 90 };
  const moji1 = { name: "Shola", age: 11, color: "fair", score: 96 };
  const moji2 = { name: "Tunde", age: 15, color: "black", score: 80 };

  let el = [];
  el.push(moji, moji1, moji2, x);
  let sum = 0;
  el.forEach((element) => {
    sum += element.score;
  });
  return sum;
}

console.log(bola({ name: "Jaji", age: 15, color: "black", score: 100 }));

let newArr = [3, 6, 8];
let newArr1 = { name: "Peter", name: "Tunde", name: "Favour" };
let newArr2 = { name: "Jaji", age: 15, color: "black", score: 100 };

for (let i in newArr2) {
  //   console.log(newArr2[i]);
}
class NewBuild {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  sum() {
    return this.x * this.y;
  }

  sumCalc() {
    return this.sum();
  }
}

let newBuild = new NewBuild(5, 5);

console.log(newBuild.sumCalc());
