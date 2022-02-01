let myself="devam";

// different ways to assign string to variable
// let myself='devam';
// let myself=`devam`;

alert( "chaudhari " +myself);  // this will do concatination
alert( `chaudhari  ${myself}`);  // this will assign value in the statement itself


let name = "Ilya";

alert( `hello ${1}` ); // this will print 1

alert( `hello ${"name"}` ); // this will is print word name

alert( `hello ${name}` ); // this will print ilya value of name

let age = prompt('How old are you?');

alert(`You are ${age} years old!`); // You are 100 years old!