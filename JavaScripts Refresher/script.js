//1.var,let and const
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
  }
  printMyName() {
    console.log(this.name);
  }
}

const person = new Person();
person.printMyName();
person.printGender();
