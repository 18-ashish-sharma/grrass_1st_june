a = 22;
var a;
console.log(a);

// var b;
// console.log(b);
// b = 21;

c();

function c() {
    console.log('hello world');
}
/*
    var a;
    a = 22;
    console.log(a);
*/

three4();

function one() {
  let name= 'ashish'
  console.log("Start");
}

con

function two() {
  setTimeout(() => {
    console.log("MID");
  }, 2000);
}
function threesecond() {
  setTimeout(() => {
    console.log("threesecond");
  }, 3000);
}

function onesecond() {
  setTimeout(() => {
    console.log("onesecond");
  }, 1000);
}

function three1() {
  console.log("END1");
}
function three2() {
  console.log("END2");
}
function three3() {
  console.log("END3");
}
function three4() {
  console.log("END4");
}

one();
two();
threesecond();
onesecond();
three1();
three2();
three3();