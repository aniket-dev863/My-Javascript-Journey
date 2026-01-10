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
//rest.set(document.querySelector("h1"), "Heading");

// Another Way to populate a Map.
const question = new Map([
  ["question", "What is the best Programming language"],
  [1, "CPP"],
  [2, "Java"],
  [3, "Javascript"],
  [true, "Yes That's the Best Language in The World "],
  [false, "Try Again"],
]);
console.log(question);

console.log(Object.entries(restuarant.openingHours));
const hourMap = new Map(Object.entries(restuarant.openingHours));
console.log(hourMap.get("thu"));

// Iteration in Maps .
// using destructuring
for (const [e, f] of question) {
  if (typeof e === "number") console.log(`Answer ${e} : ${f}`);
}
const answer = 3;
question.set("Correct", 3);
console.log(question.get(question.get("Correct") === answer));

// Converting map Back to an Array
// using the Spread operator.
console.log([...question]);
