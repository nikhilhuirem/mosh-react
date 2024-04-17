import React, { FormEvent, useRef, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be at least 3 characters" }),
  age: z.number({ invalid_type_error: "Age field is required" }).min(18, {message: "Age must be at least 18" }),
});

type FormData = z.infer<typeof schema>;

export default function Form() {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });
  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            {...register("name")}
            className="form-control"
            id="name"
          />
          {errors.name && (
            <p className="text-danger">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            {...register("age", { valueAsNumber: true })}
            id="age"
            className="form-control"
          />
          {errors.age && (
            <p className="text-danger">{errors.age.message}</p>
          )}
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </>
  );
}
