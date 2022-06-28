import React, { useState } from "react";

function Calc() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(20);
//   const [op, setOp] = useState();
  const [result, setResult] = useState(0);

  function handleChange(event, number) {
    setNum1(event.target.value);
  }
  function handleChange1(event, number) {
    setNum2(event.target.value);
  }

  console.log("num1--->", typeof num1);
//   function handleSelect(e) {
//     setOp(e.target.value);
//   }

  function calculate() {
    let ans = 0;
    // if (op === "+") {
    //   ans = Number(num1) + Number(num2);
    // } else if (op === "-") {
    //   ans = Number(num1) - Number(num2);
    // } else {
    //   ans = Number(num1) + Number(num2);
    // }
    setResult(ans);
  }
  return (
    <div>
      <label>Enter first number</label>
      <input
        type="number"
        name="num1"
        value={num1}
        onChange={(event) => handleChange(event, num1)}
      />

      <label>Enter first number</label>
      <input
        type="number"
        name="num2"
        value={num2}
        onChange={(event) => handleChange1(event, num2)}
      />

      <label>Enter operator</label>
      {/* <select name="operator" onChange={(e) => handleSelect(e)}>
        <option value="">+</option>
        <option value="">-</option>
        <option value="">/</option>
        <option value="">*</option>
      </select> */}
      {/* <button onclick={handleButtonClick}>+</button> */}
      <button>-</button>
      <button>*</button>
      <button>/</button>
      <button type="submit" onClick={calculate}>
        Calculate
      </button>
      <h1>result -------- {result}</h1>
    </div>
  );
}
//  let str = ''
//  str = str + 'value'
//  str = '2 + 21'
//  str.split('')
//  2, 21 , +
export default Calc;
