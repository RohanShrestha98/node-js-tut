const prompt = require("prompt-sync")();
const userLogin = () => {
  console.log("Enter Username and password");
  let username = prompt("Enter username : ");
  let password = prompt("Enter password : ");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Performing user authentation");
      if (username === "rohan" && password === "rohan") {
        resolve("User Authentated !");
      } else {
        reject("Authentation Failed!");
      }
    }, 1000);
  });
};

function goToHomePage(userAuthState) {
  return Promise.resolve(`Go to homepage as : ${userAuthState} `);
}

// userLogin()
//   .then((response) => {
//     console.log("Success");
//     return goToHomePage(response);
//   })
//   .then((userAuthState) => {
//     console.log(userAuthState);
//   })
//   .catch((err) => console.log(err));

// async function performTask() {
//   try {
//     const response = await userLogin();
//     console.log("User Validated");
//     const userStatus = goToHomePage(response);
//     console.log(userStatus);
//   } catch (err) {
//     console.log(err);
//   }
// }
// performTask();

const makeApiCall = (time) => {
  return () =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("This Api Call Executated in: " + time);
      }, time);
    });
};

const apiRequest = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)];
(async function () {
  for (let request of apiRequest) {
    console.log(await request());
  }
})();
