/*
Our map function will take in two arguments:

An array to map
A callback function
The map function will return a new array based on
the results of the callback function
 */

const words = ["ground", "control", "to", "major", "tom"];

const map = function(mapArray, callback) {
  const results = [];
  for (let item of mapArray) {
    results.push(callback(item));
  }
  return results;
}

const results1 = map(words, (word) => word[0]);
console.log(results1);

//HELPER FUNCTION

const eqArrays = function(array1, array2) {
  // check if the arrays are the same length
  if (array1.length !== array2.length) {
    return false;
  }
  // check if the arrays are the same
  for (let i in array1) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
  }
}

//TEST CODE
assertArraysEqual(map(words, (word) => word[0]), ['g', 'c', 't', 'm', 't']); // => true
assertArraysEqual(map(words, (word) => word.length), [5, 4, 3, 2, 1])// => false