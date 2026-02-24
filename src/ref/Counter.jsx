import React, { useCallback, useState } from "react";
import Sum from "./Sum";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("parent render on state update");

  const handleClick = useCallback(() => {
    console.log("hi", count);
  }, [count]); // ye basically count ke uper depend hai isliye

  return (
    <div>
      <h1>count : {count}</h1>
      <button
        onClick={() => {
          (setCount(count + 1), handleClick);
        }}
      >
        increase count
      </button>
      <Sum number={count} />
    </div>
  );
};

export default Counter;
