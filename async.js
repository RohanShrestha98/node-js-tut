console.log("Start Operation");
// async Code
// function sleep(miliseconds) {
//   let startTime = new Date().getTime();
//   console.log("operation is running");
//   while (new Date().getTime() < startTime + miliseconds) {
//     console.log("in process");
//   }
//   console.log("Operation is Done");
// }
// asyncronus
function sleep(miliseconds) {
  let startTime = new Date().getTime();
  console.log("operation is running");
  setTimeout(() => {
    console.log("in process");
  }, miliseconds);
  console.log("Operation is Done");
}
sleep(1000);
console.log("do SOmething else");
