// FUNCTION helper
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log (`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log (`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};
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

// FUNCTION IMPLEMENTATION
const eqObjects = function (object1, object2) {
  // 1. same number of keys
  if (Object.keys (object1).length !== Object.keys (object2).length) {
    return false;
  }
  // 2. The value for each key in one object is the same
  // as the value for that same key in the other object
  for (const key in object1) {
    if (Array.isArray (object1[key]) && Array.isArray (object2[key])) {
      if (!eqArrays (object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
}

// TEST CODE
const multiColorShirtObject = {colors: ["red", "blue"], size: "medium"};
const anotherMultiColorShirtObject = {size: "medium", colors: ["red", "blue"]};
assertEqual (eqObjects (multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

const longSleeveMultiColorShirtObject = {
  size: "medium",
  colors: ["red", "blue"],
  sleeveLength: "long",
};
assertEqual (eqObjects (multiColorShirtObject, longSleeveMultiColorShirtObject), false); // => false
