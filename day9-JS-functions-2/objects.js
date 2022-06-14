// object
const grass = {
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
};

//  defining a function -> simple function
function add(a, b) {
    // a = d =20
    // b = e = 23
  return a + b;
}
let d = 20;
let e = 23;
add(d,e);
//  arrow function

const sub = (a, b) => {
  return a - b;
};

console.log(sub(10, 20));

// calling a function or run a function or using a function


// console.log(grass.address.geo.lng);

let arr = ["Apple", "banana", "Orange", "pineapple", "Peach", "Watermelon"];

// map funciton ** very important **
function mapping(arr) {
  // arr.map(function(item){
  //     console.log(item);
  // })
//   arr.map((item) => {
//     if (item.name === "Naresh") {
//       console.log("name->>>>", item.name);
//     } else if (item.age === 22){
//         console.log("age with 22->>>>", item.name);
//     } else {
//         console.log("Not found")
//     }
//   });

//  tertiary operators

    // arr.map(function(item){
    //     item.name === 'Naresh' ?  console.log("hobbies-personal->>>>", item.hobbies.working) :  console.log("Not found")
    //     // check expression                       if true  (if)                                     if false (else)
    // })

    arr.map((i) => {
        if (i.name === 'All') {
            i.hobbies.personal.map(function(hobby){
                console.log("Hobbies---------------------->", hobby)
            })
        }
    })
}

// mapping(arr);

// array of objects
const a = [
  {
    name: "All",
    age: 20,
    hobbies: {
        personal: ['cricket', 'basketball', "cooking", "food", "stiching", "reading"],
        working: ['coding', 'DSA'],
    }
  },
  {
    name: "Priyansh",
    age: 22,
  },
  {
    name: "Priya",
    age: 24,
  },
  {
    name: "Jayesh",
    age: 22,
  },
];

mapping(a);
