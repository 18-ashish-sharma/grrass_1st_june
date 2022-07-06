// const axios = require('axios');

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("done!"), 1000);
//   });
//   //   try and catch block.
//   try {
//     let result = await promise; // wait until the promise resolves (*)
//   } catch (error) {
//     console.error(error);
//   }
//   console.log(result); // "done!"
// }
// f();

// //  without promises
// async function f2(){
//   try {
//     // 20 -> data -> 10 issue
//     const res = await fetch('url');
//   } catch (error) {
//     throw error;
//   }
// }

// function a(){
//   let x = 10;
//   function b(y){
//     console.log(x + y);
//     function c(){
//       console.log(x);
//     }
//     c();
//   }
//   b(20);
// }
// a();


// promise -> 3 
//  ! -> not
async function pro(){
  return new Promise(async (resolve, reject) => {
    // let res = await axios.get('https://jsonplaceholder.typicode.com/users')
    if (!res){
      resolve(console.log('resolve'))
    } else {
      reject(console.log('reject'))
    }
  })
}

// console.log(pro());

let a = 'hello';
console.log(a + '!');
let aa = 'function a() {return a+b}'
console.log(aa);
