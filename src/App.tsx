import { useState } from "react";
import Heading from "./components/Heading";
import ExpenseForm from "./components/ExpenseForm";
import CategoryList from "./components/CategoryList";
import ExpenseListTable from "./components/ExpenseListTable";
import "./App.css";
import { initialList } from "./data/expense";
import type { ExpenseList } from "./types/expense";

interface FilterCategory {
  selectedFilterCategory: string | null;
}
function App() {
  const [filter, setFilter] = useState<FilterCategory>({
    selectedFilterCategory: null,
  });
  const [filterList, setFilterList] = useState<ExpenseList[]>(initialList);
  const handleFilterChange = (data: string) => {
    console.log(data);
    setFilter({
      selectedFilterCategory: data,
    });
    setFilterList((prev) => prev.filter((item) => item.category == data));
  };

  const handleDelete = (id: number) => {
    setFilterList((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Heading />
      <ExpenseForm filterList={filterList} handleForm={setFilterList} />
      <CategoryList filter={filter} updateFilter={handleFilterChange} />
      <ExpenseListTable handleDelete={handleDelete} tableData={filterList} />
    </div>
  );
}

export default App;
