import { useState } from "react";
import Heading from "./components/Heading";
import ExpenseForm from "./components/ExpenseForm";
import CategoryList from "./components/CategoryList";
import ExpenseListTable from "./components/ExpenseListTable";
import ReusableModal from "./components/ReusableModal";
import "./App.css";
import { initialList } from "./data/expense";

import type { ExpenseList } from "./types/expense";

function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filterList, setFilterList] = useState<ExpenseList[]>(initialList);
  const handleFilterChange = (data: string) => {
    setFilter(data);
  };
  const visibleExpense = filter
    ? filterList.filter((expense) => expense.category == filter)
    : filterList;

  const handleDelete = (id: number) => {
    setShowModal(true);
    setSelectedId(id);
  };
  const confirmDelete = () => {
    if (selectedId !== null) {
      setFilterList((prev) => prev.filter((item) => item.id !== selectedId));
    }
    setShowModal(false);
    setSelectedId(null);
  };
  const addExpense = (list: ExpenseList) => {
    setFilterList([
      ...filterList,
      {
        ...list,
        id: list.id,
        title: list.title,
        amount: list.amount,
        category: list.category,
      },
    ]);
  };

  return (
    <div>
      <Heading />
      {showModal ? (
        <ReusableModal
          title="Delete Expense"
          description="Are you sure you want to delete this Expense"
          cancelOption={() => setShowModal(false)}
          actionOption={confirmDelete}
          cancelButtonText="Cancel"
          actionButtonText="Delete"
        />
      ) : null}

      <ExpenseForm handleForm={addExpense} />
      <CategoryList filter={filter} updateFilter={handleFilterChange} />
      <ExpenseListTable
        handleDelete={handleDelete}
        tableData={visibleExpense}
      />
    </div>
  );
}

export default App;
