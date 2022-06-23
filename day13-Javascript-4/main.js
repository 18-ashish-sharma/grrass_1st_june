
// const obj = {
//     name: 'test',
//     age: 30,
// };

// // console.log(obj.name, obj.age);

// const newArr = [];

// // for (let i = 0; i < arr.length; i++){
// //     // console.log(i)
// //     newArr.push(arr[i]);
// // }

// // arr.forEach(element => {
// //     console.log(element)
// // });

// function add(item){
//     return item + 10;
// }
// const arr = [1,2,3];
// const res = [];
// // [11,12,13]
// arr.forEach(function(val, ind){
//     const newVal = val + 10;
//     // console.log(newVal);
//     res.push(newVal);
//     arr.splice(ind, 1, newVal);

// })

// // console.log(arr);
// // == or  ===
// const arr2 = [1,2,3]; // arr2.length -> (3)
// // for (let i = 0; i < arr2.length; i++) {
// //     setTimeout(() => {
// //         // console.log(`${i} = ${arr2[i]}`);
// //     }, 2000);
// // }
// let i = 0;
// // while loop will run till the statement inside is true
// while (i < arr2.length) {
//     // console.log(i);
//     i++;
// }

// function app(){
//     // 1
//     // setTimeout(() => {
//     //     // 2
//     //     setTimeout(() => {
//     //         console.log("World");
//     //     }, 2000);
//     //     console.log("Hello");
//     // }, 2000);
// }

// let a = true;
// // setTimeout(() => {
// //     a = false;
// // }, 2000);
// // console.log(a)
// while (a) {
//     // console.log("Hello World");
// }
// //  let a
// //  setTimeout
// //  while
// //  a= true
// //  hoisting + let vs var + event loop

const obj1 = {
    name:  'world',
    age: 28,
    email: 'world@example.com',
    mobile: true,
};

//  add new value to the object
obj1['ss'] = 'localhost';

//  edit value or keys in the object
obj1['address'] = 'localhost/3000';


delete obj1['ss'];
// key value pair


//  returns array of all the keys in the object
// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));

const nums = [2,7,11,15];
const target = 9;

function ok(nums, target) {
    let res = []
    for(let i = 0; i<nums.length; i++){
        //i=3
        for(let j=i+1; j<4; j++){
            // 
            console.log(i,j)
            // if(nums[i] + nums[j] == target){
            //     res.push(i,j)        
            // }
        }
    }
    return res;
};

console.log(ok(nums, target));