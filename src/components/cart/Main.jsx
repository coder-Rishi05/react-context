import React, { useState } from "react";
import Cart from "./Cart";
import Body from "./Body";

const Main = () => {
  const [num, setNum] = useState(0);
  return (
    <div>
      <Cart num={num} />
      <Body setNum={setNum} />
    </div>
  );
};

export default Main;
