function asyncTask(cb) {
  setTimeout(() => {
    cb(null, "Rohan");
  }, 0);
}

asyncTask((err, data) => {
  if (err) {
    throw err;
  } else {
    console.log("data", data);
  }
});
