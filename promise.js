

// let promise = new Promise( (resolve, reject) => {
//   const x = "geeksforgeeks";
//   const y = "geeksforgeeks"
//   if (x === y) {
//       resolve('arun');
//   } else {
//       reject();
//   }
// });

// promise.
//   then(function (result) {
//       console.log(result);
//   }).
//   catch(function () {
//       console.log('Some error has occurred');
//   });


  let promise1 = new Promise((resolve) => {
    setTimeout(() => {
      resolve("Resolved After 100 ms");
    }, 100);
  });
  let promise2 = Promise.resolve("First rejected");
  let promise3 = Promise.reject("Second rejected");
  
  let retuendPromise = Promise.all([promise1, promise2, promise3]);
  retuendPromise.then(values =>{
    console.log(values);
  }).catch(e=>{
    console.log(e)
  });