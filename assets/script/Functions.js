// // Example1 of Function
// function showMessage() {
//   alert('Hello everyone!');
// }
// showMessage();

// // Example2 of Function Local Variable
// function showMessage() {
//   let message = "Hello, I'm JavaScript!"; // local variable

//   alert(message);
// }

// showMessage(); // Hello, I'm JavaScript!

// alert(message); // <-- Error! The variable is local to the function

// //   Example3 of Function Outer Variable
// let userName = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// showMessage(); // Hello, John

// // Example3.1 of Function Outer Variable
// let userName = 'John';

// function showMessage() {
//   userName = "Bob"; // (1) changed the outer variable

//   let message = 'Hello, ' + userName;
//   alert(message);
// }
// alert(userName); // John before the function call
// showMessage(); // Hello Bob
// alert(userName); // Bob, the value was modified by the function

// // Example1 of Function Expression
// let sayHi = function () {
//   alert("Hello");
// }

// // Example2 of Function Expression 
// let age = prompt("What is your age?", 18);

// let welcome = (age < 18) ?
//   function () {
//     alert("Hello!");
//   } :
//   function () {
//     alert("Greetings!");
//   };

// welcome(); // ok now

// // Example1 of Arrow Functions
// let sum = (a, b) => a + b;
// alert(sum(1, 2)); // 3

// // Example2 of Arrow Functions
// let age = prompt("What is your age?", 18);
// let welcome = (age < 18) ?
//   () => alert('Hello') :
//   () => alert("Greetings!");

// welcome();


// // Example3 of Multiple Arrow Function 
// let sum = (a, b) => { // the curly brace opens a multiline function
//   let result = a + b;
//   return result; // if we use curly braces, then we need an explicit "return"
// };

// alert(sum(1, 2)); // 3

// Example1 of Function invocation pattern
// let power = [1, 2, 3].map(i => 2 ** i)
// //[2,4,8]
// console.log(power);

// Example2 of Function expression invocation 

// (function () {
//   console.log("My favorite number is 3");
// })();

//it will print My favorite number is 3


//another Example

(favNumber = function (num = 3) {
  console.log("My favorite number is " + num);
})();

favNumber(5);

// it will print My favorite number is 3
//then it will print My favorite number is 5

// Example3 of constructor invocation 
// This is a function constructor:
function myFunction(arg1, arg2) {
  this.firstName = arg1;
  this.lastName = arg2;
}

const myObj = new myFunction("John", "Doe");

//Output: This will return "John"
myObj.firstName;


// Example4 of Call() method in Indirect invocation method
function greeting() {
  console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
}
const john = {
  name: 'John',
  age: 24,
};
const jane = {
  name: 'Jane',
  age: 22,
};
// Output : Hi, I am John and I am 24 years old
greeting.call(john);
// Output : Hi, I am Jane and I am 22 years old
greeting.call(jane);

//  Example4.1 of Call() method in indirect invocation method
function greet(greeting) {
  console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
}
const john = {
  name: 'John',
  age: 24,
};
const jane = {
  name: 'Jane',
  age: 22,
};
// Output: Hi, I am John and I am 24 years old
greet.call(john, 'Hi');
// Output: Hi, I am Jane and I am 22 years old
greet.call(jane, 'Hello');

// Example5 of apply() method in indirected method
function greet(greeting, lang) {
  console.log(lang);
  console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
}
const john = {
  name: 'John',
  age: 24,
};
const jane = {
  name: 'Jane',
  age: 22,
};
// Hi, I am John and I am 24 years old
greet.apply(john, ['Hi', 'en']);
// Hi, I am Jane and I am 22 years old
greet.apply(jane, ['Hola', 'es']);