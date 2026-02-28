import React from "react";

const Card = ({ count, setCount }) => {
  return (
    <div>
      This is card page {count}
      <button onClick={() => setCount(count + 1)}>setCount</button>
    </div>
  );
};

export default Card;
