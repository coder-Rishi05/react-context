### React hook form and zod

- this is how we handle form in react

```js
import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(name);
    console.log(age);
    console.log(password);
  }

  console.log("render");

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default Form;
```

- but it have problem like whenever we enter the value in any form it rerender everytime the state value is updated. to agr code jyada bda ho jaata hai ya error handling isse re render cycle bhut jyada increase ho jaati hai isliye we use rect hook form

- react hook form