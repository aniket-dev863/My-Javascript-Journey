"use strict ";
const friend1 = 'Michael';
const friend2 = 'Stevem';
const freind3 = 'Peter';

/**
 * Important DS in JS 
 * Arrays 
 * Objects 
 */
const friend = ['Aniket', 'Sarvayu', 'Anish'];
console.log(friend);

const years = new Array(2003, 2004, 2005);
console.log(years[0], friend[0]);
// Size of an array in Javascript ;
console.log(friend.length);

console.log(friend[friend.length - 1]);

friend[1] = 'Ankit';

console.log(friend);
/**
 * Array Declared with Const was Changed here .
 * 
 * Only primitive datatypes declared , are immutable 
 * We can mutate the non Primtive Datatypes .
 * 
 * But we can Change the entire array .
 * 
 * like friend= ['Aniket','Anish'];
 */

const firstName = 'Aniket';
const aniket = [firstName, 'Vyavahare', 2037 - 2003];
console.log(aniket);

/**
 * We can put a entire Array inside array .
 */

console.log(aniket.length);

// Exercise 
const calcAge = Byear => 2024 - Byear;
// Arrow Function 
const birthYears = [1990, 1967, 2003, 2008, 1990];

// Using a For Loop 
// Way to decalre a for loop 
for (let index = 0; index < birthYears.length; index++) {
    const element = birthYears[index];
    console.log(`Age is ${calcAge(element)} years `);
}

/**
 * Basic Array Methods :
 * push : Add element 
 * Push function also returns the new lenght of the array .
 * 
 * Unshift : add element to begingig of the array .
 * 
 * Pop : remove the last element of the array 
 * popped returns the popped element .
 * 
 * Shift : remove the first element from the array 
 * 
 * indexOf : gives index of the element 
 * 
 * includes : returns true or false if elementt is present in the array or not .
 
*/

const newLength = friend.push('Atharv');
console.log(friend);
console.log(newLength);

friend.unshift('Om');
console.log(friend);

const popped = friend.pop();
console.log(friend);
console.log(popped);

friend.shift();
console.log(friend.indexOf('Ankit'));

friend.push(23);
// Adding 23 the number 

console.log(friend.includes('23'));
/**
 * includes is a ES6 Functions \
 * This funcion doesn't do type corecion 
 * 
 * In the context here this function here checks 23 (Number ) with 23( String ) 
 * Return False ;
 */
console.log(friend.includes(23));// true 

if (friend.includes('Ankit')) {
    console.log(`Ankit is my there in my friends list `);
}

