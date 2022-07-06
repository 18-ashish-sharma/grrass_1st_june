import React, { useState, useEffect } from 'react';
import './App.css';
import Table from './table';

function App() {
  // const [data, setData] = useState([]);
  // const [render, setRender] = useState(1);
  //  addData(){setRender(render + 1)}
  // async function fetchData(){
  //   const res = await fetch('https://jsonplaceholder.typicode.com/users')
  //   const jsData = res.json();
  //   setData(jsData);
  // }
  // fetchData();
  const [count, setCount] = useState(1);
  const [change, setChange] = useState('hello')
  useEffect(() =>{
    // fetchData();
    console.log('Running use effect...');
  }, [count, change])
  // console.log(data);
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>Add</button>
      <h1>{change}</h1>
      <button onClick={() => setChange('world')}>Add</button>
      <br />
      <br />
      <Table />
    </div>
  );
}

export default App;

