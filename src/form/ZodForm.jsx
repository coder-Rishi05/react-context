import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { zod } from "zod";

// defining form schema
const formSchema = zod.object({
  name: zod
    .string()
    .min(3, "Minimum length should be 3")
    .max(20, "Maximum length should be 20"),
  age: zod.coerce // to convert string to number
    .number()
    .min(10, "Minimum age should be  10")
    .max(80, "Maximum age should be less then 80"),
  password: zod
    .string()
    .min(4, "Minimum length should be 4")
    .max(10, "Maximum length should be 10"),
});

const ZodForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  function submitform(data) {
    console.log(data);
  }

  console.log("render");

  return (
    <div>
      <form action="" onSubmit={handleSubmit(submitform)}>
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

export default ZodForm;
