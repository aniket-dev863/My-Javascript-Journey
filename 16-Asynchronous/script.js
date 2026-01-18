"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

// NEW COUNTRIES API URL (use instead of the URL shown in videos):
// https://restcountries.com/v2/name/portugal

// NEW REVERSE GEOCODING API URL (use instead of the URL shown in videos):
// https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}

///////////////////////////////////////
const renderCountryData = function (data, className = "") {
  const html = `
        <article class="country ${className}">
            <img class="country__img" src="${data.flag}" />
            <div class="country__data">
                <h3 class="country__name">${data.name}</h3>
                <h4 class="country__region">${data.region}</h4>
                <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(1)}M people</p>
                <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
                <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
            </div>
            </article>
            `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  //countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  console.log(`${msg}`);
  countriesContainer.insertAdjacentText("beforeend", msg);
  //countriesContainer.style.opacity = 1;
};

/*
const getCountryDataAndNeighbour = function (country) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v2/name/${country}`);
  request.send();
  request.addEventListener("load", function () {
    console.log(this.responseText);

    const [data] = JSON.parse(this.responseText);
    renderCountryData(data);
    const neighbour = data.borders?.[0];
    const request2 = new XMLHttpRequest();
    request2.open("GET", `https://restcountries.com/v2/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener("load", function () {
      console.log(this.responseText);
      const data2 = JSON.parse(this.responseText);
      console.log(data2);
      renderCountryData(data2, "neighbour");
    });
  });
};
getCountryDataAndNeighbour(`usa`);

const request = fetch("https://restcountries.com/v2/name/portugal");
const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json(); // Json  is a Async Function will return a new promise .
    })
    .then(function (data) {
      console.log(data);
      renderCountryData(data[0]);
    });
};


const getCountryData = function (country) {
  fetch(`https://restcountries.com/v2/name/${country}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          `An Error Ocurred while Fetch . The Error is ${response.status}`,
        );
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      renderCountryData(data[0]);
      const neighbour = data[0].borders?.[0];
      return fetch(`https://restcountries.com/v2/alpha/${neighbour}`);
    })
    .then((response) => response.json())
    .then((data) => renderCountryData(data, "neighbour"))
    .catch((err) => {
      console.error(`${err}`);
      renderError(`Something went wrong ${err.message} Try Again `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

*/
btn.addEventListener("click", function () {
  getLocJSON(-33.933, 18.747);
});

//getCountryData("alklkdsklkd");
// Handeling erros in promises.
/**
 * Fetch Promise is rejected when user is disconnectd from internet .
 *
 * Errors Propogate down the chain until they are caught.
 * if they are not caught -> we get uncoaught error in console .
 *
 * Fetch Promise is still fulfilled with a error 404 .
 */

// Now lets Write the gt country data in a clean manner a function .

const getJSON = function (URL, msg) {
  return fetch(URL).then((response) => {
    if (!response.ok) {
      throw new Error(`${msg} ${response.status}`);
    }
    return response.json();
  });
};
const getCountryDataAndNeighbour = function (country) {
  getJSON(
    `https://restcountries.com/v2/name/${country}`,
    `Something went Wrong during fetch `,
  )
    .then((data) => {
      renderCountryData(data[0]);
      const neighbour = data[0].borders?.[0];
      if (!neighbour) {
        throw new Error(`This country has no Neighbour`);
      }
      return getJSON(
        `https://restcountries.com/v2/alpha/${neighbour}`,
        `Something went Wrong`,
      );
    })
    .then((data2) => {
      renderCountryData(data2, `neighbour`);
    })
    .catch((err) => {
      console.log(`${err}`);
      renderError(`SomeThing went Wrong ${err.message} . `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

// getcountry and Neighbour data using a Lat and Long api

const getLocJSON = function (lat, lng) {
  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`,
  )
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((data) => {
      getCountryDataAndNeighbour(data.localityInfo.administrative[0].name);
    });
};
