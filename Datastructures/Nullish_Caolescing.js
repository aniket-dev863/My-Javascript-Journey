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
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restuarant.numguests = 0;
const guests = restuarant.numguests || 10;
console.log(guests);
// For the or operator the 0 is a Falsy Value  .
// Nullish Coalescing OPerator
const guestsCorrect = restuarant.numguests ?? 10;
console.log(guestsCorrect);

/**
 * Nullish Coalescing operator works with
 * the nullish values .
  
 * Nullish : null ,Undefined (Not 0 or ' ' );
 */

const res1 = {
  name: "Capri",
  numGuests: 0,
};

const res2 = {
  name: "Pizzeria",
  ownerName: "Aniket Vyavahare",
};

// Shortcircuiting using OR Operator.

res2.numGuests = res2.numGuests || 10;
//console.log(res2.numGuests);

// OR Assignment Operator
// res2.numGuests ||= 10;
// res1.numGuests ||= 10;
// console.log(res2.numGuests);
// console.log(res1.numGuests);

/**
 * If We are given the
 * numGuests in Res1 are 0 .
 * Our OR Operator will fail
 * for OR Operator the 0 is also a Falsy value .
 */

// We Can use Nullish Assignment Operator.

res1.numGuests ??= 10;
res2.numGuests ??= 10;
console.log(res1.numGuests);
console.log(res2.numGuests);

// AND Assignment Operator
// Make the name of the owner Anonymous .
/**
 * Logical Operators treat the
 * '' as a Falsy value.
 *
 * If the name of the owner is present make it anonymous .
 */

res1.ownerName &&= "<ANONYMOUS>";
res2.ownerName &&= "<ANONYMOUS>";

console.log(res1);
console.log(res2);
