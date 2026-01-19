// chai aur Code Promises video //

const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log(`Im in Promise 1 .`);
    resolve();
  }, 1000);
});
promiseOne.then(() => {
  console.log(`Consumed Promise 1 `);
});

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(() => {
    console.log(`Im Inside the Promise where Data is being Send to Then .`);
    resolve({
      userName: "Aniket",
      collgeName: "Vit University",
      Address: "Katpadi,India",
    });
  }, 1000);
});

promiseTwo.then((data) => {
  console.log(data.userName);
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = false;
    if (!err) {
      resolve({ userName: "Aniket", collegeName: "VIT University" });
    } else {
      reject("Some Error occured inside the Promise ");
    }
  }, 1000);
});

promiseThree
  .then((data) => {
    console.log(data);
    return data.userName;
  })
  .then((myUser) => {
    console.log(myUser);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log(`Finally Im understanding Web Development`);
  });

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let err = false;
    if (err) {
      reject("Something went Wrong ");
    } else {
      resolve({ Language: "JavaScript", impTopic: "Async-Await" });
    }
  }, 1000);
});

async function consumePromiseFour() {
  try {
    const response = await promiseFour;
    console.log(response);
  } catch (err) {
    console.log(err);
  }
}

consumePromiseFour();
