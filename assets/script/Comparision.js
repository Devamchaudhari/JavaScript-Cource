// //example1
// alert( 2 > 1 );  // true (correct)
// alert( 2 == 1 ); // false (wrong)
// alert( 2 != 1 ); // true (correct).

// //String comparison example
// //ascii value of lowercase string start from: 97 to 122
// //ascii value of lowercase string start from: 65 to 90
// alert( 'Z' > 'A' ); // true
// alert( 'Glow' > 'Glee' ); // true
// alert( 'Bee' > 'Be' ); // true

//String comparison example2
//ascii value of lowercase string start from: 97 to 122
//ascii value of lowercase string start from: 65 to 90

// alert( '97' > '122' ); // true
// alert( 'Glow' > 'Glee' ); // true
// alert( 'Bee' > 'Be' ); // true

//Comparison of different types example
// alert( '2' > 1 ); // true, string '2' becomes a number 2
// alert( '01' == 1 ); // true, string '01' becomes a number 1
// alert( 'a' > 1 );//false, datatype error.

//Comparison with null and undefined example

//For a strict equality check ===
//These values are different, because ech of them is a different type.
// alert( null === undefined ); // false

// For a non-strict check ==
// There’s a special rule. These two are a “sweet couple”: they equal each other (in the sense of ==), but not any other value.
// alert( null == undefined ); // true


// Strange result: null vs 0
// Comparisons convert null to a number, treating it as 0. That’s why null >= 0 is true and  null > 0 is false.
// alert( null > 0 );  // false
// alert( null >= 0 ); //  true

// equality check == for undefined and null is defined such that, without any conversions, they equal each other and don’t equal anything else. 
// That’s why  null == 0 is false.
// alert( null == 0 ); //  false

// because undefined gets converted to NaN and NaN is a special numeric value which returns false for all comparisons.
alert( undefined > 0 ); // false 
alert( undefined < 0 ); // false 

//same as null==0 is false because null is equal to undefined
alert( undefined == 0 ); // false 