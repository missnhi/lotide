// helper function
const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`)
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`)
  }
};

/*countOnly will be given an array and an object.
It will return an object containing counts of everything that the input object listed.
only keys which have a truthy value should be counted

allItems: an array of strings that we need to look through
itemsToCount: an object specifying what to count*/
const countOnly = function (allItems, itemsToCount) {
  const ret = {};
  for ( let name of allItems ) {
    if (itemsToCount[name]) {
      if (ret[name]) { //  If the item is already in the ret object, its count is incremented.
        ret[name]++;
      } else {
        ret[name] = 1;
      }
    }
  }
  return ret;
};

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];


const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);