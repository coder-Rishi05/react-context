import React, { useState } from "react";

const Body = ({ setNum }) => {
  const [add, setAdd] = useState(false);
  const [item, setItem] = useState([
    {
      id: 1,
      name: "Ice cream",
      price: 200,
    },
    {
      id: 2,
      name: "papaya",
      price: 200,
    },
    {
      id: 3,
      name: "marygold cream",
      price: 200,
    },
    {
      id: 4,
      name: "Fruit cream",
      price: 100,
    },
  ]);

  return (
    <div>
      {item.map((data) => (
        <div key={data.id}>
          <h2>{data.name}</h2>
          <p>{data.price}</p>
          <button
            onClick={() => {
              setAdd(!add);
              setAdd(data => data + 1);
            }}
          >
            {add ? "Add item" : "remove item"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Body;
