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
 * Function invoke shouild come after the function expression only .
 */
/**
 * Arrow Functions in Javascript
 * 
 * Simplest Form only with one parameter 
 * one code .
 * 
 * we Can ommit return only when we have a one   liner function here . 
 */
const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);

// Years until retirement 
const yearsUntilRetirement = (birthyear, firstName) => {
    const age = 2025 - birthyear;
    const retirement = 65 - age;
    return `${firstName} retires in ${retirement} years .  `;
}

console.log(yearsUntilRetirement(2003, 'Aniket'));

/**
 * Difference between Arrow function .
 * Arrow Function -> doesnt take the this keyword ;
 */

// RECURSION 

const cutFruitPieces = function (fruit) {
    return fruit * 4;
}

const fruitProcessor = function (apples, oranges) {

    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    return `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange . `;

};

console.log(fruitProcessor(2, 3));

