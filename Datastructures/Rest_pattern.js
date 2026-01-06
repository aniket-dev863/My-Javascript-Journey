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

const arr = [1, 2, ...[3, 4]];

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(...others);

const [pizza, , risotto, ...otherFood] = [
  ...restuarant.starterMenu,
  ...restuarant.mainMenu,
];

console.log(...otherFood);

// Rest Pattern for Objects

const { sat, ...weekdays } = restuarant.openingHours;
console.log(weekdays);

// 2) Functions REST Parameters .
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
  //console.log(numbers);
};

add(2, 3);
add(5, 3, 7, 8, 9);
add(1, 2, 3, 4, 5, 6, 7, 8, 9);

const x = [];
