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