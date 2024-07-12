"use strict";
// Task 1
console.log("Hello World, Node.js!");

//Task 2
// 1.
const myArray = Array(15, 12, 99, 36, 19); // thisArray = [15, 12, 99, 36, 19];

console.log(myArray);
// 2.
myArray.push(20);
console.log(myArray);
// 3.
myArray.unshift(105);
console.log(myArray);
// 4.
myArray.splice(2, 0, 17);
console.log(myArray);

// 5.
myArray.pop();
console.log(myArray);

// 6.
myArray.splice(1, 1);
console.log(myArray);

// 7.
myArray.splice(4, 1, 100);
console.log(myArray);

// 8.
const map1 = myArray.map((x) => x * 2);
console.log(map1);

// 9.
//const initValue = 0;
const sumWithInitial = myArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
  /*, initValue */
);
console.log(sumWithInitial);

// Task 3
// 1. javascript object
const people = [
  { username: "Jim", password: "123" },
  { username: "Jib", password: "456" },
  { username: "Jik", password: "789" },
];
console.log(people);

// 2.
const peopleJSON = JSON.stringify(people);
console.log(peopleJSON);

// 3.
const peopleJS = JSON.parse(peopleJSON);
console.log(peopleJS);

// Task 4
const prompt = require("prompt");
prompt.start();

prompt.get(["num1", "num2"], function (err, result) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result.num2);
  console.log("Command-line input received:");
  console.log(" num1: " + result.num1);
  console.log(" num2: " + result.num2);

  const num1 = Number(result.num1);
  const num2 = Number(result.num2);

  const sum = num1 + num2;

  console.log("Sum of numbers is " + sum);
  console.log('"prompt": "^1.3.0"');

  // Task 5
  // 1.
  const convUpperCase1 = function (value) {
    return value.toUpperCase();
  };
  console.log(convUpperCase1("hello"));

  // 2.
  const convUpperCase = (value) => value.toUpperCase();
  console.log(convUpperCase("hello"));
});
