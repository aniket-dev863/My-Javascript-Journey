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
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    address,
  }) {
    console.log(
      `Order Recieved ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is a delicous pasta with 
    ${ing1},${ing2} and ${ing3}`);
  },
};

const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);
const newArr = [1, 2, ...arr];
console.log(newArr);
/**
 * ... -> is called a Spread operator
 * Multiple values separated by comma
 */

console.log(...newArr);
// logs the individual elements of the array

const newMenu = [...restuarant.mainMenu, "Paratha"];
// here we are craeting a new array .
console.log(...newMenu);

// Shallow Copy of the arrays
const mainMenuCopy = [...restuarant.mainMenu];

// Join 2 or more arrays together

const wholeMenu = [...restuarant.mainMenu, ...restuarant.starterMenu];

console.log(...wholeMenu);

// Spread operators works on all iterables .
// objects are not iterables
// String iterable spread operator can be used

const str = "Aniket";
const letters = [...str, "", "S."];
console.log(...str);

/**
 * Multiple values Separted by a comma are only
 * expected by arrays and functions parameters
 *
 * we cannot use spread operator inside a template literal , because ${` `} doesn't expect multiple values with comma.
 */
const ingredients = [
  prompt("Let's make pasta! Ingredient 1?"),
  prompt("Ingredient 2?"),
  prompt("Ingredient 3 ?"),
];
console.log(...ingredients);
restuarant.orderPasta(...ingredients);

// working of spread op with Object.

const newRestuarant = { founded: 1998, ...restuarant, founder: "Aniket" };

console.log(newRestuarant);
