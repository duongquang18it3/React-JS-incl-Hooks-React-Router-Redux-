/* //1.var,let and const
var namer = "Quang";
console.log(namer);
namer = "Thu";
console.log(namer);
//let
let myName = "Max";
console.log(myName);
myName = "Quang";
console.log(myName);
//const
const ten = "Bong";
console.log(ten);
const ten1 = "Tuyet Thu";
console.log(ten1);

// Arrow Functions and Normal Functions
// Normal functions

function printMyName(name) {
  console.log(name);
}
printMyName("Quang handsome");

// Arrow Functions
const inTen = (ten) => {
  console.log(ten);
};
inTen("Quang dep trai");

const multiply = (number) => number * 2;
console.log(multiply(4));

// Exports and Imports (Modules)

// Class in JS
// Contructor Functions

class Human {
  constructor() {
    this.gender = "male";
  }
  printGender() {
    console.log(this.gender);
  }
}
class Person extends Human {
  constructor() {
    super();
    this.name = "Perter";
    this.gender = "female";
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();

// Spread and Rest Operator
// 1. Spread
// Array
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
console.log(newNumbers);

// Object
const dog = {
  name: "Lu",
  color: "red",
};

const newDog = {
  ...dog,
  age: 2,
};
console.log(newDog);

// Rest

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log(filter(1, 2, 3)); */

/* // Destructuring
// Array
const numbers = [1, 2, 3];
const [num1, , num3] = numbers;
console.log(num1, num3);

// Object
// Ex1:
const dog = {
  nameDog: "Thai",
  age: "12",
};
const { nameDog } = dog;
console.log(nameDog);

//Ex2:
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;
console.log(foo, bar); */

// Primitive type
/* 
let number = 1;
let num2 = number;
number = 4;
console.log(num2);

// Object & Array

const person = {
  names: "Quang",
};

const secondsPerson = person;
person.names = "Thu";
console.log(secondsPerson); */

// If you copy object you may use spread operator ({...})
/* 
const person = {
  names: "Quang",
};

const secondsPerson = { ...person };
person.names = "Thu";
console.log(secondsPerson); */

// Map

const numbers = [1, 2, 3];
const doubleNumArray = numbers.map((num) => num * 2);
console.log(numbers);
console.log(doubleNumArray);


