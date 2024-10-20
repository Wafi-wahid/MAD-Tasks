let myPromise = new Promise(function (resolve, reject) {
  let a = Math.random();
  if (a < 0.5) {
    resolve("No random no for today");
  } else {
    reject("Error bcz rejected " + a);
  }
});

console.log(myPromise);

myPromise
  .then(
    function (value) {
      console.log(value);
    },
    function (error) {
      console.log(error);
    }
  )
  .catch((err) => console.log(err));
