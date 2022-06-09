// // var let and const.

//  gloabal scope
var pi = 3.14;

// // file scope
// var a = 2;

// block-scoped
// let b = 3;

// // cannot change its value.
// const c = 13;

// // functional scope.
// function priyansh() {
//   b = 300;
//   console.log(b);
//   console.log("Hello priyansh");
// }
// console.log(a);
// priyansh();

// program to print the text
// variable a cannot be used here
function greet() {
  let a = "hello";
  if (a === "hello") {
      let b = "world";
  }
  console.log(a + " " + b); // error
}

var k = 10;
var k = 20;

// SyntaxError: Identifier 'g' has already been declared
// let g = 10;
let g = 20;
g = 22;
// greet();

//  conditional operators.

function login(text) {
    if (text === 'head') {
        var a = 10;
        a * pi;
        console.log("Priyansh will bat first");
    } else if (text === 'tail'){
        console.log("naresh will bat first");
    } else {
        console.log("Nobody wins");
    }
}

// login('head');