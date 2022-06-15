// import logo from './logo.svg';
import './App.css';
import { Hello, Bye } from './funciton';
import Ok from './funciton';  

export default function App() {
  // Data structure and algorithims -> DSA
  let arr = [10,2,30,4,5]
  function sorty(arr) {
    for(var i=0; i<arr.length; i++) {
      for(var j=i+1; j<arr[i].length; j++){
        arr[i]> arr[j]
        // 1     arr[1] = 2
      }
    }
  }
  return (
    <div className="App">
      Ashish
      <Hello /> 
      <Bye />
      <Ok />
      {/*  self closing tag */}
    </div>
  );
}
