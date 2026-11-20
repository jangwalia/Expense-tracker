function ExpenseForm() {
  return (
    <form>
      <div className=" mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input type="text" className="form-control" id="description" />

        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input type="number" className="form-control" id="amount" />

        <label htmlFor="date" className="form-label">
          Category
        </label>
        <select className="form-control" id="category">
          <option value="food">Food</option>
          <option value="housing">Housing</option>
          <option value="transportation">Transportation</option>
          <option value="utilities">Utilities</option>
          <option value="entertainment">Entertainment</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Add Expense
      </button>
    </form>
  );
}

export default ExpenseForm;
