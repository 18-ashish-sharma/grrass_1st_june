// closure

//  parent
function a(x){
    console.log('hello');
    //  child
    function b(){
      console.log(x);
    }
    b();
}
a('Shivani');
// https://jsonplaceholder.typicode.com/posts  -> 100 data

//  create a table with 100 rows:  use this package : https://www.npmjs.com/package/react-table
// reference: https://codesandbox.io/examples/package/react-table
// https://codesandbox.io/s/ewm82

//  on every state change the page will re render.

//  Jayesh  -> useState. -> re render
//  Naresh -> useEffect.
//  priya -> scopes and closure with examples.
//  priyansh -> promises / async-await.