import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('Priyansh');
  const [age, setAge] = useState(20);
  const [data, setData] = useState([]);

  const num = [1,2,3,4,5,6,7,8,9,0];
  const obj = {
    numbers: [1,2,3,4,5,6,7,8,9,0],
    operator: ['+', '-', '*', '/']
  };
  const [value, setValue] = useState('0');
  const [value2, setValue2] = useState('0');

function handle(i){
  setValue(...value,
      value + i
    );
}
function handle1(i){
  setValue2(i);
}

  async function fetchData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await res.json();
    console.log('Calling fetchData')
    setData(result);
  }

  useEffect(() => {
    console.log('page rendered again...........!');
    fetchData();
  }, [age, name]);

  // dependency array...............! whatever is inside that array -> any change useEffect.

  return (
    <div className="App">
      <h1>{name}</h1>
      <button type="button" onClick={() => setName('Naresh')}>Change name</button>
      <button type="button" onClick={() => setName('Priya')}>Change name1</button>
      <button type="button" onClick={() => setName('Shivani')}>Change name2</button>
      <button type="button" onClick={() => setName('Jayesh')}>Change name3</button>
      <h2>{age}</h2>
      <button type="button" onClick={() => setAge(30)}>Change name3</button>
<br />
<br />
<br />
<br />
      {/* {
        data.map((item) => (
          <h1 key={item.id}>{item.name}</h1>
        ))
      } */}
      {
        num.map((item) => (
          <button type="button" onClick={() => handle(item)}>{item}</button>
        ))
      }
      <h1>Value1 {value}</h1>

      {
        num.map((item) => (
          <button type="button" onClick={() => handle1(item)}>{item}</button>
        ))
      }

    <h1>Value2 {value2}</h1>
      <br />
      <br />
      <br />
      <br /><br />

    </div>
  );
}

export default App;


