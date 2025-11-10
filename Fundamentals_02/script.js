'use strict';
/**
 * Activating the Strict Mode 
 * Helps to write a secure Javascript code
 * Secure means 
 * helps avoid accidental bugs
 */

let hasDriversLicence = false;
const passTest = true;

//if (passTest) hasDriverLicence = true;
/**
 * Without using the strict mode the above line will not give you a Error .
 */
if (hasDriversLicence) console.log(`I can Drive :D`);

/**
 * Functions in Javascript 
 * 
 */

// Function Decleration 
function logger() {
    console.log(`My name is Aniket`);
}
for (let i = 0; i < 3; i++)logger();

// --> Function invoked 
function add(a, b) {
    return a + b;
}
console.log(add(2, 3));
console.log(add("Hello ,", "World"));
/**
 * Dynamic Typing (JavaScript, Python)
 * In JavaScript, you are creating variables and parameters that are just empty boxes.
 * Result: This is very flexible but can lead to runtime errors.
 */

// Function Expression 

const findAge = function (birthyear) {
    return 2025 - birthyear;
}
console.log(findAge(2008));
/**
 * We can Invoke a Fuunction created using function Declaration before the actual Decleration .
 * but we cannot do the same with the Function Expression 
 * FUnction invoke shouild come after the function expression only .
 */