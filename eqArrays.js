// a function that can compare two arrays for a perfect match
const eqArrays = function(array1, array2) {
  // check if the arrays are the same length
  if (array1.length !== array2.length) {
    return false;
  }
  // check if the arrays are the same
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};
module.exports = eqArrays;