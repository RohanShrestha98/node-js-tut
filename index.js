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

// const { data } = require("./car");
// console.log(JSON.stringify(data.car, undefined, 2));
// const { tesla } = require("./car");
// console.log(JSON.stringify(tesla, null, 2));

const path = require("path");

const filePath = "D:express tutorial\filessample.txt";

// //dirname
// console.log(path.dirname(filePath));
// console.log(__dirname);
// //basename
// console.log(path.basename(filePath));
// console.log(__filename);

// //extention
// console.log(path.extname(filePath));
// const sampleFile = "Sample.txt";

// console.log(path.join(path.dirname(filePath), sampleFile));

const fs = require("fs");
const fsPromise = require("fs").promises;
// console.log(fs);

// reading from the file - asyncronus

// fs.readFile(filePath, "utf-8", (err, data) => {
//   if (err) throw new Error("Something Went Wrong");
//   console.log(data.toString());
// });

// reading from the file - syncronus

// try {
//   const data = fs.readFileSync(
//     path.join(__dirname, "files", "sample.txt"),
//     "utf-8"
//   );
//   console.log(data.toString());
// } catch (err) {
//   console.log("err", err);
// }

// const fileReading = async () => {
//   try {
//     const data = await fsPromise.readFile(
//       path.join(__dirname, "files", "sample.txt"),
//       { encoding: "utf-8" }
//     );
//     console.log("FS Promises : ", data);
//   } catch (err) {
//     console.log(err);
//   }
// };
// fileReading();

// Writing into the file
const textFile = path.join(__dirname, "files", "sample.txt");
const content = "This is text file";
// fs.writeFile(textFile, content, (err) => {
//   if (err) throw new Error("Something Went Wrong");
//   console.log("Write Operation Successfull");
//   fs.readFile(textFile, "utf-8", (err, data) => {
//     if (err) throw new Error("Something went wrong");
//     console.log("Reading file after writting in it : ", data);
//   });
// });

// Writting in a file by promises

const writtingINFile = async () => {
  try {
    await fsPromise.writeFile(textFile, content);
    await fsPromise.writeFile(textFile, "\n Its Awsome", {
      flag: "a+",
    });
    // await fsPromise.appendFile(textFile, "\n This is a text appender 123");
    await fsPromise.rename(textFile, path.join(__dirname, "files", "new.txt"));
    const data = await fsPromise.readFile(
      path.join(__dirname, "files", "new.txt")
    );
    console.log("Promise Data : ", data.toString());
  } catch (err) {
    console.log(err);
  }
};
writtingINFile();
