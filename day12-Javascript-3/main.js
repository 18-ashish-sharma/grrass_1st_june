function mileToKm(a){
    // 1mile === 1.6km
    return a * 1.6;
}

// find square root (4 underroot 2)

function findSquareRoot(a){
    // return Math.sqrt(a);
    // let res = Math.sqrt(a);
    console.log(Math.sqrt(a))
}

// let res = findSquareRoot(64);
// findSquareRoot(121);
// console.log(res);
// console.log(findSquareRoot(64));


let arr = [100, 2, 3, 2344, 155, 60, 87878, 987, 52];
let n = ['g','a','d','e','r', 'f']
//i           0   1  2   3   4     5
// j              1   2   3   4    5  
function maxValue(arr){
    let maxValue = arr[0];
    for (let i = 1; i < arr.length; i++){
        // let j = i-1;
        if(arr[i] > arr[i+1]){
            maxValue = arr[i];
        } else{
            maxValue = arr[i+1]
        }
    }
    return maxValue
}

// console.log(maxValue(arr));
function sortF(arr){
    let done = false;
    while (!done){
        done = true
        for(let i=1 ; i < arr.length; i++){
            if(arr[i-1] > arr[i]){
                done = false;
                let tmp = arr[i-1];
                arr[i-1]= arr[i]
                arr[i] = tmp;
            }
        }
    }
    console.log(arr);
    return arr[arr.length -1];
}

// console.log(sortF(name));
//  for string
console.log(n.sort());
// for integers
// console.log(arr.sort((function(a,b) {return a- b})));