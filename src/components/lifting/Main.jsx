import React, { useState } from "react";
import Body from "./Body";
import Card from "./Card";
import Layout from "./Layout";

const Main = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>This is main page : {count}</h1>
      <Body count={count} setCount={setCount} />
      <Layout count={count} />
    </div>
  );
};

export default Main;
