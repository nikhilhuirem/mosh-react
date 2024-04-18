import React from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "./categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters" }).max(50),
  amount: z
    .number({ invalid_type_error: "Amount field is required" })
    .min(0.01, { message: "Amount must be at least 1" }).max(100_000),
    category: z.enum(categories)

});

interface Props {
  onSubmit: (data: FormData) => void;
}

type FormData = z.infer<typeof schema>;

export default function ExpenseForm({ onSubmit }: Props) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <form onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset();
      })}>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            type="text"
            {...register("description")}
            id="description"
            className="form-control"
          />
          {errors.description && (<p className="text-danger">{errors.description.message}</p>)}
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            type="number"
            id="amount"
            {...register("amount", { valueAsNumber: true })}
            className="form-control"
          />
          {errors.amount && (<p className="text-danger">{errors.amount.message}</p>)}
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Category
          </label>
          <select {...register('category')} className="form-select" id='category'>
            <option selected>All categories</option>
            { categories.map((category) => (
                <option value={category} key={category}>{category}</option>
            ))}
          </select>
          {errors.category && (<p className="text-danger">{errors.category.message}</p>)}
        </div>
        <button className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}
