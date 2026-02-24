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

```js
import React from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const { register, handleSubmit } = useForm();

  function submitform(data){
    console.log(data)
  }

  console.log("render")

  return (
    <div>
      <form action="" onSubmit={handleSubmit(submitform)} >
        <div>
          <label htmlFor="first">Name : </label>
          <input {...register("name")} id="first" />
        </div>
        <div>
          <label htmlFor="second">Age : </label>
          <input {...register("age")} id="second" />
        </div>
        <div>
          <label htmlFor="third">Password : </label>
          <input {...register("password")} id="third" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default HookForm;

```

ye re render nhi ho rha chahe jitni bhi value daalun.

### error handling in rect-hook-form

```js
import React from "react";
import { useForm } from "react-hook-form";

const HookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function submitform(data) {
    console.log(data);
  }

  console.log("render");

  return (
    <div>
      <form action="" onSubmit={handleSubmit(submitform)}>
        <div>
          <label htmlFor="first">Name : </label>
          <input
            {...register("name", { required: "Name can't be empty" })}
            id="first"
          />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="second">Age : </label>
          <input
            {...register("age", {
              min: {
                value: 10,
                message: "Min age must be 10",
              },
              max: {
                value: 80,
                message: "Min age must be less than 80",
              },
            })}
            id="second"
          />
          {errors.age && <span>{errors.age.message}</span>}
        </div>
        <div>
          <label htmlFor="third">Password : </label>
          <input {...register("password")} id="third" />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default HookForm;

```

here we are handling error right there which looks ugly and can increase the complexity so to fix it we use zod.

