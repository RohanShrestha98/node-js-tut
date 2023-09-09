const error = new Error("Some thing went wrong");
const { resolve } = require("styled-jsx/css");
// console.log(error.message);
// console.log(error.stack);

// throw new Error("This is error object");

const { CustomeError } = require("./CustomeError");
const { reject } = require("lodash");

// throw new CustomeError("This is a Custome Error");

// try {
//   doSomething();
// } catch (e) {
//   console.log(e);
// }
function doSomething() {
  const data = fetch("localhost:300/api");
  //   console.log("this is do Something");
  //   const data = "This is REturn";
  //   return data;
}

//Uncaugtht Exception

// process.on("Uncaught Exception", (err) => {
//   console.log("This is Uncaught Exception", err);
//   process.exit(1);
// });

// Exception with promise

// const promise = new Promise((resolve, reject) => {
//   if (true) {
//     resolve(doSomething());
//   } else {
//   }
// });

// promise
//   .then((val) => {
//     console.log("value", val);
//   })
//   .catch((err) => {
//     console.log("error Occer");
//     console.log(err);
//   });

//Exception with async await

const someFunction = async () => {
  try {
    await doSomething();
  } catch (err) {
    throw new CustomeError(err.messege);
  }
};
someFunction();
