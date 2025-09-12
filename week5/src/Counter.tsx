import React, { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0)
  }

  return (
    <div style={{padding: '20'}}>
      <h2 style={{color: 'black'}}>Counter Exercise</h2>
      <h1 style={{color: 'skyblue'}}>{count}</h1>
      <div style={{margin : '20px 0', display: 'flex' , gap:'15px' , justifyContent:'center'}}>
        <button onClick={increment} style={{backgroundColor:'green'}}>+เพิ่ม</button>
        <button onClick={decrement} style={{backgroundColor:'red'}}>-ลด</button>
        <button onClick={reset} style={{backgroundColor: 'orange'}}>🔄Reset</button>
      </div>
    </div>
  );
};

export default Counter;
