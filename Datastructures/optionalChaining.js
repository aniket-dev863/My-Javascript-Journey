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
// This checking if the property exists or not can go out of hand we have to check evey property

// First we checked ig opening hours exits and after that if mon exist
if (restuarant.openingHours && restuarant.openingHours.mon)
  console.log(restuarant.openingHours.mon);

/**
 * With optional Chaining
 */
console.log(restuarant.openingHours?.mon?.open);

const days = ["Mon", "Tue", "Wed", "thu", "fri", "sat", "Sun"];

// for (const day of days) {
//   const open = restuarant.openingHours[day]?.open || "Closed";
//   console.log(`We are open on ${day} from ${open} hours .`);
// }

// Here we can use nullish colascing operator to use 0 as opening hour in saturday .

for (const day of days) {
  const open = restuarant.openingHours[day]?.open ?? "Closed";
  if (!(open == "Closed")) {
    console.log(`We are open on ${day} at ${open} hours`);
  } else {
    console.log(`We are ${open} on ${day} . `);
  }
}

// Optional Chaining on methods .

// Check if the method exists or not
console.log(restuarant.order?.(0, 1) ?? "Method Does't exist ");
console.log(restuarant.orderRisotto?.(0, 1) ?? "Method DNE ");

// Optional Chaining on arrays .

//Creating a Array of Objects .
const users = [
  { Username: "Aniket Vyavahare ", Age: 22, Address: "VIT University" },
];
console.log(users[0]?.Username ?? "Name does not Exist ");
