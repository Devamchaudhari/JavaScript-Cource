alert("simple alert");

// //prompt alert example
// let age = prompt('How old are you?');
// alert(`You are ${2020-age} years old!`); // You are 100 years old!

//confirm alert example
let isBoss = confirm("Are you the boss?");
alert( isBoss ); // true if OK is pressed

let age = prompt("How old are you?");
let year = new Date();
alert(`You were born around ${year.getFullYear()-age}`);

// let age = prompt('How old are you?');
// alert(`You were born around ${2020-age}`); 

