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
