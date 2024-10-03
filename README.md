# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.
**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @nhi_phan/lotide`

**Require it:**

`const _ = require('@nhi_phan/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(array)`: Returns the first element of the array.
- `tail(array)`: Returns the array without the first element.
- `middle(array)`: Returns the middle element(s) of the array.
- `assertArraysEqual(actual, expected)`: Asserts that two arrays are equal.
- `assertEqual(actual, expected)`: Asserts that two values are equal.
- `assertObjectsEqual(actual, expected)`: Asserts that two objects are equal.
- `countLetters(string)`: Returns an object with the count of each letter in the string.
- `countOnly(allItems, itemsToCount)`: Returns counts for a specific subset of items.
- `eqArrays(array1, array2)`: Compares two arrays for equality.
- `eqObjects(object1, object2)`: Compares two objects for equality.
- `findKey(object, callback)`: Returns the first key for which the callback returns a truthy value.
- `findKeyByValue(object, value)`: Returns the first key which contains the given value.
- `letterPositions(string)`: Returns all the indices in the string where each character is found.
- `takeUntil(array, callback)`: Returns a slice of the array with elements taken from the beginning until the callback
  returns a truthy value.
- `without(source, itemsToRemove)`: Returns a subset of the array, removing unwanted elements.