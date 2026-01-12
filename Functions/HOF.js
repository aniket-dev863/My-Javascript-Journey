/**
 * Beginner understanding of Higher order Functions.
 */
"use strict";
const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...other] = str.split(" ");
  return [first.toUpperCase(), ...other].join(" ");
};
/**
 *
 * @param {string} str
 * @param {Function} fn
 */
const caller = function (str, fn) {
  console.log(`Before Transformation: ${str}`);
  console.log(`After Transformation: ${fn(str)}`);
  console.log(`Transformed using : ${fn.name}`);
};

/**
 * This is a example of a higher order function .
 * Here the upperFirstWord is a Callback Function .
 * Higher Order Functions are At a higher abstraction leve;
 */
caller("aniket", upperFirstWord);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greetings = greet("Hello");
greetings("Aniket");

greet("Good Morning")("Anusha");

/// Lets write a the same greet function using the arrow functions

const say = (prefix) => (Name) => console.log(`${prefix} ${Name}`);
say("Good Morning")("Manisha");
