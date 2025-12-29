/**
 * This is the Practice of object destructuring
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
};

restuarant.orderDelivery({
  time: "22:30",
  address: "Via Del Sole",
  mainIndex: 2,
  starterIndex: 0,
});

const { name, categories, openingHours } = restuarant;
console.log(name, categories, openingHours);

// Below is the way to destructure object in the javascript
// and provide names other than the ones in the Object Notation .
const {
  name: restuarantName,
  categories: tags,
  openingHours: hours,
  menu: menuCard = [], // default value to the menu item in object if its not present .
} = restuarant;
console.log(name, tags, hours, menuCard);

// Mutating variables
let a = 118;
let b = 999;
const obj = { a: 23, b: 24 };
({ a, b } = obj);
console.log(a, b);
