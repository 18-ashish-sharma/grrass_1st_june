// remove element
const nums = [0, 1, 2, 2, 3, 0, 4, 2];
const val = 2;
// const val = 3;
// Output: 2, nums = [2,2,_,_]

const res = [];
let count = 0;

for (let i = 0; i < nums.length; i++) {
  if (nums[i] === val) {
    res.push("_");
  } else {
    count += 1;
    res.push(nums[i]);
  }
}

// console.log(res, count);

//  palindrome

const myName = "priyansh,nahar";
let a = myName.split(",");
// console.log(a)
// console.log(myName.split(','));
let url = "https://www.w3schools.com/jsref/jsref_split.asp";
// console.log(url.split('./'))

let nameTwo = "Shivani";
// console.log(nameTwo.split('').reverse().join(''));

const x = -121;
//  res - true
const y = 123;
// res - false
let newStr = String(x).split("").reverse().join("");
// NaN -> not a number
// console.log(newStr);
// if(newStr === x){
//     console.log(true);
// }else{
//     console.log(false);
// }

//  plus one number
const digits = [9];
let ans = 0;
let digit1 = digits.join();
// console.log(digit1);
ans = String(Number(digit1) + Number(1)); // '121'
// console.log(ans);
// let aa = String(ans).split(',')
// console.log(aa.split(','));
let arr = [];
for (let i = 0; i < ans.length; i++) {
  // console.log(ans[i])
  arr.push(ans[i]);
}
// console.log(arr);
// console.log([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,4])

let comb = digits.join("");
console.log(comb);
let abc = Number(comb) + Number(1);
// console.log(abc);
let abcStr = abc.toString();
console.log(abcStr.split(""));

const aaaaa = "A man, a plan, a canal: Panama";
// convert into array
//  replace -> , space, : etc...
//  join
//  reverse
//  check 
// console.log('AmanaplanacanalPanma'.toLowerCase())
console.log(aaaaa.replace(',', ' '));

let s = "A man, a plan, a canal: Panama";
for (let i = 0; i < s.length; i++) {
   if (s[i] < "A" || (s[i] > "Z" && s[i] < "a") || s[i] > "z") {
    s = s.substring(0, i) + s.substring(i + 1);
    i--;
  }
}
//  reverse a string
let xx = s.split("").reverse().join("");
console.log(xx);
console.log(s.toLowerCase() == xx.toLowerCase());

var isPalindrome = function(s) {
    if(s.includes(Number)){
        return false;
    }
    for (let i = 0; i < s.length; i++) {
        console.log(parseInt(s[i]), typeof s[i])
        if(parseInt(s[i]) != NaN) {
            console.log('hell')
            return false;
        } else if (s[i] < "A" || (s[i] > "Z" && s[i] < "a") || s[i] > "z") {
            s = s.substring(0, i) + s.substring(i + 1);
            i--;
        }
    }
    let res = s.split("").reverse().join("");
    return (s.toLowerCase() == res.toLowerCase())
};


// console.log(isPalindrome(s));