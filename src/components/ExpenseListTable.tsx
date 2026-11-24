import type { ExpenseList } from "../types/expense";
import NoExpenseBanner from "./NoExpenseBanner";
interface ExpenseTable {
  tableData: ExpenseList[];
  handleDelete: (id: number) => void;
}

function ExpenseListTable({ tableData, handleDelete }: ExpenseTable) {
  return tableData.length === 0 ? (
    <NoExpenseBanner />
  ) : (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Amount</th>
          <th scope="col">Category</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((item, index) => (
          <tr key={item.id}>
            <th scope="row">{index + 1}</th>
            <td>{item.title}</td>
            <td>${item.amount}</td>
            <td>{item.category}</td>
            <td>
              <button
                onClick={() => handleDelete(item.id)}
                type="button"
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default ExpenseListTable;
