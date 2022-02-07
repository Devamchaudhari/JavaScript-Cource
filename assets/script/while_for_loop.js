//While Loop Example1
let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}
// While Breaking Loop Example2
let sum = 0;

while (true) {

  let value = +prompt("Enter a number", '');

  if (!value) break; // (*)

  sum += value;

}
alert( 'Sum: ' + sum );


// Do while Loop Example1
let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);


// For Loop Example1
for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
  }


// Labeling Loop
outer: for (let i = 0; i < 3; i++) {

    for (let j = 0; j < 3; j++) {
  
      let input = prompt(`Value at coords (${i},${j})`, '');
  
      // if an empty string or canceled, then break out of both loops
      if (!input) break outer; // (*)
  
      // do something with the value...
    }
  }
  alert('Done!');