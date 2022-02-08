// // Example1 of BasicObject
// let user = {};

// // set
// user["likes birds"] = true;

// // get
// alert(user["likes birds"]); // true

// // delete
// delete user["likes birds"];

// // Example2 of BasicObject using Prompt
// let user = {
//     name: "John",
//     age: 30
//   };

//   let key = prompt("What do you want to know about the user?", "name");

//   // access by variable
//   alert( user[key] ); // John (if enter "name")


// //   Example3 of BasicObject
// let user = {
//     name: "John",
//     age: 30
//   };
//   user.name="devam"
//   console.log(user);

// // Example4 of BasicObject
// let user = {
//     name: "John",
//     age: 30
//   };
//   let key = "name";
//   alert( user.key ) // undefined

// Eample5 of BasicObject
// let fruit = prompt("Which fruit to buy?", "apple");

// let bag = {
//   [fruit]: 5, // the name of the property is taken from the variable fruit
// };

// alert( bag.apple ); 

// Example6 of BasicObject
// let fruit = 'apple';
// let bag = {
//   [fruit + 'Computers']: 5 // bag.appleComputers = 5
// };

// Example7 of BasicObject using Function
// function makeUser(name, age) {
//     return {
//       name: name,
//       age: age,
//       // ...other properties
//     };
//   }

//   let user = makeUser("John", 30);
//   alert(user.name); // John

// Example8 of BasicObject
// let obj = {
//     for: 1,
//     let: 2,
//     return: 3
//   };

//   alert( obj.for + obj.let + obj.return );  // 6 

// Example9 of BasicObject
// let obj = {
//     0: "test" // same as "0": "test"
//   };

//   // both alerts access the same property (the number 0 is converted to string "0")
//   alert( obj["0"] ); // test
//   alert( obj[0] ); // test (same property)

// Example10 of BasicObject using IN Operator
// let user = { name: "John", age: 30 };

// alert( "age" in user ); // true, user.age exists
// alert( "blabla" in user ); // false, user.blabla doesn't exist

// Example11 of BasicObject 
// let user = { age: 30 };

// let key = "age";
// alert( key in user ); // true, property "age" exists

// Example11 of BasicObject using For loop
// let user = {
//     name: "John",
//     age: 30,
//     isAdmin: true
//   };

//   for (let key in user) {
//     // keys
//     alert( key );  // name, age, isAdmin
//     // values for the keys
//     alert( user[key] ); // John, 30, true
//   }