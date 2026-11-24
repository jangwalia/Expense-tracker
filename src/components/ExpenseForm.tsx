import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ExpenseList } from "../types/expense";

let Schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be 3 characters long" }),
  amount: z
    .number("Must be Number")
    .max(1000, { message: "Amount cannot exceed $1000" }),
  category: z.enum(
    ["food", "housing", "transportation", "utilities", "entertainment"],
    {
      message: "Please select a valid Category",
    },
  ),
});

type ExpenseForm = z.infer<typeof Schema>;

interface ExpenseFormProp {
  handleForm: (data: any) => void;
  filterList: ExpenseList[];
}

function ExpenseForm({ handleForm, filterList }: ExpenseFormProp) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ExpenseForm>({ resolver: zodResolver(Schema) });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    handleForm([
      ...filterList,
      {
        id: z.uuid(),
        title: data.description,
        amount: data.amount,
        category: data.category,
      },
    ]);
  };

  return (
    <form className="mainForm" onSubmit={handleSubmit(onSubmit)}>
      <div className=" mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description")}
          type="text"
          className="form-control"
          id="description"
        />
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}

        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { valueAsNumber: true })}
          type="number"
          className="form-control"
          id="amount"
        />
        {errors.amount && (
          <p className="text-danger">{errors.amount.message}</p>
        )}
        <label htmlFor="date" className="form-label">
          Category
        </label>
        <select
          {...register("category")}
          className="form-select"
          aria-label="Default select example"
          id="category"
        >
          <option defaultValue={"Nothing"}>Select Category</option>
          <option value="food">Food</option>
          <option value="housing">Housing</option>
          <option value="transportation">Transportation</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
        {errors.category && (
          <p className="text-danger">{errors.category.message}</p>
        )}
      </div>

      <button type="submit" className="btn btn-primary">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
