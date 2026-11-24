import { useState } from "react";
import Heading from "./components/Heading";
import ExpenseForm from "./components/ExpenseForm";
import CategoryList from "./components/CategoryList";
import ExpenseListTable from "./components/ExpenseListTable";
import "./App.css";
import { initialList } from "./data/expense";

import type { ExpenseList } from "./types/expense";

function App() {
  const [filter, setFilter] = useState("");
  const [filterList, setFilterList] = useState<ExpenseList[]>(initialList);
  const handleFilterChange = (data: string) => {
    setFilter(data);
  };
  const visibleExpense = filter
    ? filterList.filter((expense) => expense.category == filter)
    : filterList;

  const handleDelete = (id: number) => {
    setFilterList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Heading />
      <ExpenseForm filterList={visibleExpense} handleForm={setFilterList} />
      <CategoryList filter={filter} updateFilter={handleFilterChange} />
      <ExpenseListTable
        handleDelete={handleDelete}
        tableData={visibleExpense}
      />
    </div>
  );
}

export default App;
