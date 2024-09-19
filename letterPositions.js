// return all the indices (zero-based positions) in the string where each character is found.

// HELPER FUNCTION(S)
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

const assertArraysEqual = function (array1, array2) {
  if (eqArrays (array1, array2)) {
    console.log (`✅✅✅ Assertion Passed: ${array1} === ${array2}`)
  } else {
    console.log (`🛑🛑🛑 Assertion Failed: ${array1} !== ${array2}`)
  }
}

// MAIN FUNCTION
const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push (i);
      } else {
        results[letter] = [i];
      }
    }
  }
  return results;
}

// TEST CODE
const test1 = {
  h: [0],
  e: [1],
  l: [2, 3],
  o: [4]
};
console.log (letterPositions ("hello"));
assertArraysEqual (letterPositions ("hello")['h'], test1['h']);
assertArraysEqual (letterPositions ("hello")['h'], test1['h']);
assertArraysEqual (letterPositions ("hello")['l'], test1['l']);
assertArraysEqual (letterPositions ("hello")['o'], test1['o']);