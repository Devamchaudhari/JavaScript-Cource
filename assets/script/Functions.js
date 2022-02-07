// Example1 of Function
function showMessage() {
    alert( 'Hello everyone!' );
  }
showMessage();

// Example2 of Function Local Variable
function showMessage() {
    let message = "Hello, I'm JavaScript!"; // local variable
  
    alert( message );
  }
  
  showMessage(); // Hello, I'm JavaScript!
  
  alert( message ); // <-- Error! The variable is local to the function

//   Example3 of Function Outer Variable
let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John

// Example3.1 of Function Outer Variable
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}
alert( userName ); // John before the function call
showMessage();
alert( userName ); // Bob, the value was modified by the function

// Example1 of Function Expression
let sayHi = function() {
    alert( "Hello" );
}

// Example2 of Function Expression 
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now

// Example1 of Arrow Functions
let sum = (a, b) => a + b;
alert( sum(1, 2) ); // 3

// Example2 of Arrow Functions
let age = prompt("What is your age?", 18);
let welcome = (age < 18) ?
  () => alert('Hello') :
  () => alert("Greetings!");

welcome();


// Example3 of Multiple Arrow Function 
let sum = (a, b) => {  // the curly brace opens a multiline function
    let result = a + b;
    return result; // if we use curly braces, then we need an explicit "return"
  };

  alert( sum(1, 2) ); // 3