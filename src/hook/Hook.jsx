import React, { useState } from "react";

const Hook = () => {
  // useState  相当于设置 state
  const [count, setCount] = useState({ name: "wang", age: 12 });
  const [state, setstate] = useState([1, 2, 3, 4, 5]);
  function handler() {
    setCount({ ...count, age: count.age + 1 });
  }
  function handler2() {
    const arr = [...state];
    arr[1] = "wang";
    setstate(arr);
  }
  return (
    <div>
      <div>{count.age}</div>
      <div>{state}</div>
      <button onClick={handler}>+1</button>
      <button onClick={handler2}>+1</button>
    </div>
  );
};

export default Hook;
