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
const orderSet = new Set([
  "Pasta",
  "Pizza",
  "Pizza",
  "Rissotto",
  "Pasta",
  "Rissotto",
]);
// Unique elements with a Set like in Cpp .
console.log(orderSet.size);
// called Set.size not like lenght in Cpp .
console.log(orderSet);

console.log(orderSet.has("Pizza"));
orderSet.add("Lasagnia");
orderSet.delete("Risotto");
console.log(orderSet.has("Risotto"));
console.log(typeof orderSet);

// orderSet.clear // Delete all elements .

for (const order of orderSet) {
  console.log(order);
}

const staff = ["Waiter", "Chef", "Waiter", "Manager", "Waiter"];
const staffUnique = new Set(staff);
console.log(staffUnique);

// Conversion of Set to a Array .
const staffuniqueArray = [...new Set(staff)];
console.log(staffuniqueArray);

// Count Unique elements in a Iterable
console.log(new Set("aniket").size);

// There are many new Methods available in the sets IN ES25

// console.log(staffUnique.intersection())
// console.log(staffUnique.difference())
