let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

// remember the regular Object? it would convert keys to string
// Map keeps the type, so these two are different:
alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3

//Example 2
// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion',    50]
//   ]);
  
//   // iterate over keys (vegetables)
//   for (let vegetable of recipeMap.keys()) {
//     alert(vegetable); // cucumber, tomatoes, onion
//   }
  
//   // iterate over values (amounts)
//   for (let amount of recipeMap.values()) {
//     alert(amount); // 500, 350, 50
//   }
  
//   // iterate over [key, value] entries
//   for (let entry of recipeMap) { // the same as of recipeMap.entries()
//     alert(entry); // cucumber,500 (and so on)
//   }

//Example 3
let obj = {
    name: "John",
    age: 30
  };
  
  let map = new Map(Object.entries(obj));
  
  alert( map.get('name') ); // John

// Example 4
let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
  ]);
  
  // now prices = { banana: 1, orange: 2, meat: 4 }
  
  alert(prices.orange); // 2

//Example 5
let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visits, some users come multiple times
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set keeps only unique values
alert( set.size ); // 3

for (let user of set) {
  alert(user.name); // John (then Pete and Mary)
}