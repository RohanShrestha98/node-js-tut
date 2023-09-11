// const promise = new Promise((resolve, reject) => {
//   console.log("async task exe");
//   if (true) {
//     const person = { name: "Rohan" };
//     resolve(person);
//   } else {
//   }
// });

// promise
//   .then((val) => {
//     console.log(val);
//   })
//   .catch(() => {
//     console.log("Error");
//   })
//   .finally(() => {
//     console.log("Clean Up");
//   });

// let p = Promise.reject("Its failed");

// p.then((val) => {
//   console.log(val);
//   return "Rohan";
// })
//   .then((val) => {
//     console.log(val);
//   })
//   .catch((val) => console.log(val));

// function asyncTask() {
//   return Promise.resolve("Its okey");
// }

// asyncTask().then(() => console.log(name));
// const name = "Rohan";

const makeApiCall = (time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("This Api Call Executated in: " + time);
    }, time);
  });
};

let multiApiCall = [makeApiCall(1000), makeApiCall(2000), makeApiCall(500)];
Promise.all(multiApiCall).then((value) => {
  console.log(value);
});

Promise.race(multiApiCall).then((value) => {
  console.log(value);
});

// makeApiCall(1000).then((val) => console.log(val));
