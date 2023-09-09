// console.log("This is me Rohan Shrestha");
// console.log("Okey ");
// process.exit(0);

// const _ = require("lodash");
// const arr = [1, 2, 3];
// console.log(_.chunk(arr));
// console.log(_.last(arr));

// const cowsay = require("cowsay");
// console.log(
//   cowsay.say({
//     text: "Hello this is me Rohan",
//     e: "00",
//     t: "U",
//   })
// );

const { data } = require("./car");
console.log(JSON.stringify(data.car, undefined, 2));
const { tesla } = require("./car");
console.log(JSON.stringify(tesla, null, 2));
