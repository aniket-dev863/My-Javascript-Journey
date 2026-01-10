// This is the shee for maps in javascript
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

/**
 * In objects : Keys will always be strings.
 */
const rest = new Map();
rest.set("name", "Hotel Tara Ma");
rest.set(2, "Katpadi Vellore");
rest
  .set("open", 10)
  .set("close", 22)
  .set(true, "We are Open :D")
  .set(false, "We are Closed :( ");

const time = 11;
// Power of having booleans as keys in maps
console.log(rest.get(time >= rest.get("open") && time <= rest.get("close")));
console.log(rest.size);
const arr = [1, 2];
// We can pass any object as a key here .
rest.set(arr, "test");
console.log(rest.get(arr));
console.log(rest.get("open"));
rest.set(document.querySelector("h1"), "Heading");
