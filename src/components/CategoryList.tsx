interface CategoryListProp {
  updateFilter: (data: string) => void;
  filter: {
    selectedFilterCategory: string | null;
  };
}

function CategoryList({ filter, updateFilter }: CategoryListProp) {
  return (
    <div className="categoryWrapper">
      <h2>Filter By Category</h2>
      <select
        value={filter.selectedFilterCategory || ""}
        onChange={(e) => {
          updateFilter(e.target.value);
        }}
        className="form-select"
        aria-label="Default select example"
      >
        <option defaultValue="">Choose Category</option>
        <option value="Food">Food</option>
        <option value="Housing">Housing</option>
        <option value="Entertainment">Entertainment</option>
        <option value="Transportation">Transportation</option>
        <option value="Utilities">Utilities</option>
      </select>
    </div>
  );
}

export default CategoryList;
