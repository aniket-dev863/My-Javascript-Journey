"use strict";
// functions where some parameters are set by default .
const bookings = [];
const createBooking = function (flightNumber, numPassengers, flightPrice) {
  numPassengers ||= 1;
  flightPrice ||= numPassengers * 1000;
  const booking = {
    flightNumber: flightNumber,
    numPassengers: numPassengers,
    flightPrice: flightPrice,
  };
  console.log(booking);
  bookings.push(booking);
};
createBooking("6E611", undefined, 199);
createBooking("LH124", 800);
console.log(bookings);

/**
 * How Passing Arguments Works Value vs Reference .
 */
