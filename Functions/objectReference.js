"use strict";

// Shallow Copy vs Deep Copy o
// How Spread operator is responsible for a shallow copy .
const person = {
  firstName: "Sara",
  lastName: "Fatima",
  isMarried: false,
  children: [],
};
const marriedAdd = function (obj, newLastName) {
  const newObj = { ...obj };
  newObj.lastName = newLastName;

  return newObj;
};
const arr = ["Ankit", "Aniket"];
const hasChildren = function (obj, childs) {
  const newObj = { ...obj };
  newObj.children.push(...childs);
  return newObj;
};
hasChildren(person, arr);
/**
 * Has Children creates a new Object .
 * Here We are creating a new object using the spread operator  .
 * value of primitive datatypes is copied reference of non primitive
 * datatypes like object
 * and array is copied .
 */
console.log(hasChildren(person, arr));

console.log(...person.children);
// Array in the original person object is same as the array in the
// newObject because of the shallow copy.
