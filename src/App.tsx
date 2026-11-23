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
    setFilter({
      selectedFilterCategory: data,
    });
  };

  return (
    <div>
      <Heading />
      <ExpenseForm filterList={filterList} handleForm={setFilterList} />
      <CategoryList filter={filter} updateFilter={handleFilterChange} />
      <ExpenseListTable tableData={filterList} />
    </div>
  );
}

export default App;
