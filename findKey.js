//FUNCTION HELPER
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};
//ACTUAL FUNCTION
// The findKey function takes an object and a callback as arguments.
// It calls the callback on the values of the object and returns the first key where the callback returns a truthy value.

const findKey = function(object, callback) {
  for (let key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
}

//TEST CODE

assertEqual(
  findKey(
    {
      "Blue Hill": {stars: 1},
      Akaleri: {stars: 3},
      noma: {stars: 2},
      elBulli: {stars: 3},
      Ora: {stars: 2},
      Akelarre: {stars: 3},
    },
    (x) => x.stars === 2
  ),
  "noma"
); // => should PASS