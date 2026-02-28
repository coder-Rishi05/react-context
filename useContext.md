# useContext, stateLifting and prop drilling

- state lifting

state lifting : means data ko child me pass na krke direct super parent ko pass karna taki vhan se data ko kisi bhi child me send kr paaye

prop drilling : basically props ko alag alag component me bhejna hai from top to bottom use krna.
iski vajah se unncessary state loading hoti hai baar baar.

code example : 
```jsx
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
import React from 'react'
import Card from './Card'

const Body = ({count,setCount}) => {
  return (
    <div>
      This is body page : {count}
      <Card count={count} setCount={setCount} />
    </div>
  )
}

export default Body
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
import React from 'react'

const Layout = ({count}) => {
  return (
    <div>
      This is layout page {count}
    </div>
  )
}

export default Layout


```