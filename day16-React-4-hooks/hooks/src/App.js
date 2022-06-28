import { useState } from 'react';
import './App.css';
import Calc from './calculator';

function App() {
  //  define a state in react.
  const [count, setCount] = useState(1);
  //    count -> value -> state
  //    setCount -> function which will control count. -> setState funtion.
  //    useState -> hook.
  //    (1) -> is the default of count. -> if we refresh state goes to its default value
  function handleClick(){
    setCount(count + 10);
  }
  function handleDecrease(){
    setCount(count - 1);
  }
  function reset(){
    setCount(0);
  }
  return (
    <div className="App">
      {/* use a state */}
        <h1>{count}</h1>
        <button onClick={handleClick}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
        <br />
        <br />  
        <Calc />
    </div>
  );
}

export default App;
