import { useState } from "react";
import Heading from "./components/Heading";
import ExpenseForm from "./components/ExpenseForm";
import CategoryList from "./components/CategoryList";
import "./App.css";

interface FilterCategory {
  selectedFilterCategory: string | null;
}
function App() {
  const [filter, setFilter] = useState<FilterCategory>({
    selectedFilterCategory: null,
  });
  const handleFilterChange = (data: string) => {
    setFilter({
      selectedFilterCategory: data,
    });
  };
  return (
    <div>
      <Heading />
      <ExpenseForm />
      <CategoryList filter={filter} updateFilter={handleFilterChange} />
    </div>
  );
}

export default App;
