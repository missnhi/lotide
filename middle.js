// Implement function to return the middle element(s) of an array

// Helper functions
const assertArraysEqual = function (array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
  }
}

const eqArrays = function (array1, array2) {
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

// IMPLEMENTATION
 const middle = function (array){
   let retArray = [];
    let mid = Math.floor(array.length / 2);
    if (array.length <= 2){
      return retArray;
    }
    if (array.length % 2 === 0){
      retArray.push(array[mid - 1]);
      retArray.push(array[mid]);
    } else {
      retArray.push(array[mid]);
    }
    return retArray;
 }
 
// TEST CODE
assertArraysEqual(middle([1]), []); // => should PASS
assertArraysEqual(middle([1, 2]), []); // => should PASS
assertArraysEqual(middle([1, 2, 3]), [2]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => should PASS
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); // => should PASS
