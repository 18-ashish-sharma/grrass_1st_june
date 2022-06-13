// let arr = ['Apple', 'banana', 'Orange', "pineapple", 'Peach', 'Watermelon'];
//          0           1       2           3           4       5
// console.log(arr.length); // 6
let i = 0;
i++; // i + 1
// i = 1
// console.log(i); // 0 + 1 -> 1
++i; // 1 + i
// i = 2
// console.log(i); // 1 + i(value) = 2

//  conditional operators:
//  +, -, *, /, 

//  equal to in js:
// 1 -> ==
// 2 -> ===

// console.log(1 == '1'); // true
//  == -> value equal
// console.log(1 === '1'); // false
// value + type equal

let a = 'ashish'; // string
let b = 26; // number
let ob = {}; // object
let ar = []; // array
// console.log(typeof ob);
// console.log(typeof ar);


let arr = ['Apple', 'banana', 'Orange', "pineapple", 'Peach', 'Watermelon'];
//                                              -3         -2             -1           
// console.log(arr[-1]); // result

// arr.push('grape')
// arr.pop(); // remove last element from array
// arr.splice(0, 1);
console.log(arr);

for(let j=0; j < arr.length; j++) {
    // 0 1 2 3 4 5
    console.log(arr[j]); // arr of j -> arr[0]
}