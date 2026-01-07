/**
 * This is the code file for the Array Destructuring.
 */
"use strict";
const restuarant = {
  name: "Classic Italiano",
  location: "Via Angelo Tavanti 23 ,Firenze Italy ",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruscheta", "Garlic Bread", "Caprese Salid"],
  mainMenu: ["Pizza", "Pasta", "Risotto", "Lasagnia"],
  // This Keyword to put
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

const arr = [1, 3, 4];
// Unpacking of the array.
const [x, y, z] = arr;
console.log(x, y, z);
//console.log(arr);

let [first, , second] = restuarant.mainMenu;
console.log(first, second);
// switcihing Variables first and second .
[first, second] = [second, first];
console.log(first, second);

const [starter, mainCourse] = restuarant.order(2, 0);
console.log(starter, mainCourse);

// Nested Array Destructuring

const nested = [1, 2, [4, 5, 6]];
const [s, , [p, , r]] = nested;
console.log(s, p, r);

// In this destructuring we can also use the
// default values.

const smallArr = [8, 10];
const [d = 1, f = 1, g = 1] = smallArr;
console.log(d, f, g);
// the values g DNE
// We get our default values there .

// Looping arrays using for of loop
const menu = [...restuarant.starterMenu, ...restuarant.mainMenu];
for (const item of menu) console.log(item);
/**
 * array.entries()
 */
// If we need index of element  for of loop
for (const item of menu.entries()) {
  console.log(`${item[0] + 1} : ${item[1]}`);
}

// Using the destructuring the array.
for (const [i, el] of menu.entries()) {
  console.log(i + 1, `:`, el);
}
