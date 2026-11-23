import type { ExpenseList } from "../types/expense";
interface ExpenseTable {
  tableData: ExpenseList[];
}

function ExpenseListTable({ tableData }: ExpenseTable) {
  return (
    <table className="table">
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
              <button type="button" className="btn btn-outline-danger">
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
