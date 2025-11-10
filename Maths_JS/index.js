let a = 10;
let b = 3445.6821;
let c = b.toFixed(2);
// console.log(c);
// console.log(typeof (c));
// console.log(typeof (b));
let d = new Number(20);
console.log(d);
console.log(typeof d);
// When We create a Number using new keyword it creates a object .
// Objects are compared by checking their reference .
let e = new Number(20);
console.log(c == d);// Returns false 
// Because both c and d  a refer to different object(memory Locations)...

// Many Functions like Math.
/*
Math.random() --> Prints a random number between 0 to 1
*/
console.log(Math.random()); // -->0.03979545891957015

// Get Random numbers between 0 to 9 ;
console.log(Math.floor(Math.random() * 10));

// Get the random number between 1 to 100 ; 
console.log(Math.ceil(Math.random() * 100));
/**
 * General Formula to Generate any number in a particular range using math.random 
 * Math.floor(Math.random()*(totalNumberOfOutcome))+shift 
 * Math.floor(Math.random()*(Max-Min+1))+Min  
 */

/**
 * How Does Math.random actually generates a random number .
 * 
 */
