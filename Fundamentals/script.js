/*

// let keyword is used to declare varibles that change later 
// let is also used to declare empty variables 
// Const keyword varibles values cannot ever change in future 
// like birth year is can be a constant varibale .
// LET --> Mutable varibale 
// Const --> ImMutable Variable 
// Type conversion : Manually consvert between varibales
// Type Coersion : JavaScript automatically converts 
// Its like type casting implicit and explicit one . 

let age = 30;
age = 31;
console.log(age)
lastname = 'Aniket';
console.log(lastname);
const now = 2025;
const ageAniket = now - 2003;
const ageAniruddha = now - 2008;
console.log(ageAniket);
console.log(ageAniruddha);
console.log(ageAniket - ageAniruddha);
// const power = 2 ** 3;
// console.log(power);
// const firstName = 'Aniket';
// const lastName = 'Vyavahare'
// console.log(firstName + ' ' + lastName);
// console.log(typeof firstName);
// console.log(typeof power);
// const desc = "I,m " + firstName + ' a , ' + (ageAniket) + ' Year old  Software developer based out of India ';
// console.log(desc);
// const descNew = `I'm ${firstName} a ${ageAniket} year old softaware developer based out of India `;

if (ageAniket >= 18) {
    console.log(`Aniket can drive the car `);
}
else {
    console.log(`Aniket cannot drive the car`);
}
if (ageAniruddha >= 18) {
    console.log(`Aniruddha can drive the car `);
}
else {
    console.log(`Aniruddha cannot drive the car
    Wait another ${18 - ageAniruddha} years`);
}

// type conversion 

const myAGE = '21';
console.log(typeof myAGE);
console.log(Number(myAGE));
// here the number function  does't change the type of myAGE 
// it just makes it look like number 
console.log(typeof myAGE);
console.log(Number(myAGE) + 2);

// firstName is a string ;
// Number --> String 
// Number --> Boolean 
console.log(String(ageAniruddha) + 10);


// Type Coercion 
let n = '15' - 6 - 3 - 3 + '4';
console.log(n); // prints 34 
// when + sign is present it a binary operator , if one of its operand is 
// string it will concatenate both operands .

let nn = '15' - 6 - 3 - 3 + 4;
console.log(nn); // prints 7  

// TRUTY AND FALSY VALUES 
// There are 5 Falsy values in JS : 0,'',undefined,NaN,null 
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean('ANiket'));
const money = 0;
if (money) {
    console.log(`Start investing your money `);
}
else {
    console.log(`Go get a job for Yourself`);
}
let firstName;
if (firstName) {
    console.log(firstName);
}
else {
    console.log('Name is not defined');
}

// USE OF LOOSE EQUALITY AND STRICT EQUALITY OPERATOR 
/*
let num = prompt("Whats your age : ")
if (num === 18) {
    console.log("Your are an adult (STRICT )");
}
else {
    console.log(`Not an adult (strict)`);
}
if (num == 18) {
    console.log(`Your an Adult (typecoercion done )`);
}
else {
    console.log(`Your are not an adult (LOOSE)`);
}
    */

// NOTES 
// The == operator does a type corecion like if '18'==18 --> TRUE 
// String '18' converted to the number 18 for purpose of comparision .

// The operator === is a Strict operator it does not do type conversion 
// string 18 === number 18 ---> not equal ie False .

// Strict not equal Operator (!==) 
// Loose not equal operator  (!=) 


// Basic Boolean Logic in javascript ;


const hasDriversLicence = true;
const hasGoodVision = true;
if (hasDriversLicence && hasGoodVision) {
    console.log(`Sarah can drive the car`);
}
else {
    console.log(`She cannot drive the car `);
}

// Switch statements in javascript .

let day = Number(prompt(`Enter the day `));
switch (day) {
    case 1:
        console.log(`Monday`);
        break;
    case 3:
        console.log(`Tuesday`);
        break;
    case 4:
        console.log(`Wednesday`);
        break;
    default:
        console.log(`day after wednesday`);
        break;
}
