```js
//counter.jsx
import React, { useState } from "react";
import Sum from "./Sum";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <Sum />
    </div>
  );
};

export default Counter;
```

```js
//sum.jsx

import React from "react";
const Sum = () => {
  function add() {
    let sum = 0;
    for (let i = 0; i < 1000; i++) {
      sum = sum + i;
    }
    return sum;
  }
  let a = add();
  console.log("sum rerender");
  return <div>total sum : {a}</div>;
};

export default Sum;
```

yhan jitni baar bhi hm count pe click krenge utni hi baar count ki value increase ho and dom re render hoga. ye again and agian change hota rhega

jbki yhan h1 and Sum inki value same hai ye change nhi ho rhe phir bhi render ho rhe han

there we use a hook memo to jo code mai dubara render nhi krwana chate usko direct memo ke ander likh doonga

```js
import React from "react";

const Sum = React.memo(() => {
  function sum() {
    let add = 0;
    for (let i = 0; i < 1000; i++) {
      add = add + i;
    }
    return add;
  }
  const total = sum();
  return <div>total sum : {total}</div>;
});

export default Sum;
```

now my sum page will not re render again on updating the value of counter.

react memo memorise ki kya parent ke change hone pe mughe change hona hai ki nhi

### memo with props

```js
import React, { useState } from "react";
import Sum from "./Sum";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <Sum number={1000} />
    </div>
  );
};

export default Counter;
```

abhi mai parent se number bhej rha hun child component me pr vo number constant value hai jo ki change nhi ho rhi isliye child compoentn abhi bhi re render nhi hoga.
yhan ye props ko compare krega ki props ki value change hui ya nhi jo ki nhi ho rhi isliye render nhi krega

```js
import React, { useState } from "react";
import Sum from "./Sum";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("parent render on state update");
  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <Sum number={count} />
    </div>
  );
};

export default Counter;

import React from "react";

const Sum = React.memo(({ number }) => {
  function sum() {
    let add = 0;
    for (let i = 0; i < number; i++) {
      add = add + i;
    }
    return add;
  }
  const total = sum();
  console.log("child re render")
  return <div>total sum : {total}</div>;

});

export default Sum;

```

- now ab mai state value bhej rha hun jo ki on clik pe update ho rhi hai to ab mera child bhi baar baar render hoga jb jb value update hogi

### useMemo

ye memorise krta hai last value ko taki use dubara na calculate krna pde during the re render

### useCallback hook

```js
import React, { useState } from "react";
import Sum from "./Sum";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log("parent render on state update");

  function hi() {
    console.log("hi");
  }

  return (
    <div>
      <h1>count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>increase count</button>
      <Sum number={count} />
    </div>
  );
};

export default Counter;
```

jitni baar bhi ye re render hoga utni baar hi() function dubara create hoga isliye we use useCallback(). ye hmare function ko remember krta hai.

```js
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
```

yhan agr hm object send krte han to vo re render hoga kyonki do object same value hmesah unique hote han
object ko refrence ke base pe compara krte han isliye.
