const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// expected output: Array ["somestring", 42, false]

const arrayLikeObj2 = {
  100: 'a',
  2: 'b',
  7: 'c'
};
console.log(Object.values(arrayLikeObj2)); // ['b', 'c', 'a']