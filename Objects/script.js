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
    birthYear: 2004,
    job: 'Student',
    friends: ['Anish', 'Ankit', 'Atharv'],
    // calcAge: function (birthYear) {
    //     return 2025 - birthYear;
    // }

    calcAge: function () {
        this.age = 2025 - this.birthYear;
        return this.age;
    },
    writeSummary: function () {
        return `${this.firstName} is a ${this.age} old  ${this.job} studying at ${this.college} College . `;
    }
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

/**
 * Object Methods .
 * 
 * We can add functions to the objects like we do it in
 * the key value pairs and 
 * 
 * Function calcAge added to Aniket .
 */

//console.log(aniket.calcAge(2004));
//console.log(aniket['calcAge'](2004));

/**
 * This keyword is used to refer the
 * object calling this method .
 * this.bithYear means the : Take the birthYear of
 * that object which has called this method .
 * 
 * We have shown both methods in the object aniket.
 */

console.log(aniket.calcAge()); //. this keyword handles the work here .

console.log(aniket.age);// age function is used here ; 

// Challenge : -> 
//" Aniket is a 21 years old student and he does not have a  Drivers Licence .  " ; 

console.log(aniket.writeSummary());

/**
 * Loops in JavaScript .
 * 
 */

// for (let rep = 0; rep < 10; rep++) {
//     console.log(`Lifting weighs : ${rep}`);
// }
const types = [];
for (let i = 0; i < aniketArray.length; i++) {
    console.log(aniketArray[i], typeof (aniketArray[i]));

    types[i] = typeof (aniketArray[i]);
}

console.log(types);

