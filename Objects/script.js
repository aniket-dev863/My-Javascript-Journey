const aniketArray = [
    'Aniket',
    'Vyavahare',
    2025 - 2004,
    'Code',
    ['Anish', 'Ankit', 'Atharv']
];
/**
 * Object :
 * Contains Key Value Pairs .
 * Literal Syntax 
 * 
 * Arrays are used for Ordered Data 
 * Objects are used for Unorederd Data 
 */
const aniket = {
    firstName: 'Aniket',
    lastName: 'Vyavahare',
    age: 2025 - 2004,
    job: 'Student',
    friends: ['Anish', 'Ankit', 'Atharv']
};

/**
 * Dot Vs Bracket Notation .
 * 
 * Dot Nototion : lot cleaner and easier to use .
 */

console.log(aniket.lastName);
// Defining the Key
const nameKey = 'Name';
console.log(aniket['first' + nameKey]);
console.log(aniket['last' + nameKey]);

//const IntrestedIn = prompt('What do you want to know about jonas ');
//console.log(aniket[IntrestedIn]);

/**
 * Undefined is a Falsy Values
 * 
 * When we try to acces that property of object which does not exist .
 * we get Undefined as a value.
 * 
 * 
 */

// if (aniket[IntrestedIn]) {
//     console.log(aniket[IntrestedIn]);
// }
// else {
//     console.log(`Wrong request choose between firstname , last name job and friends `);
// }

/**
 * Adding new properties to the objects 
 */
aniket['college'] = 'VIT Vellore';
aniket.homeState = 'Maharashtra';

//console.log(aniket);

// Challenge :
// Aniket has 3 friends and his best friend is
// called Anish 

console.log(`Aniket has ${aniket.friends.length} friends his best friend is ${aniket.friends[0]} . `);