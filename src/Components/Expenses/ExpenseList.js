import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.data.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense found.</h2>;
  }
  return (
    <ul className="expenses-list">
      {props.data.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;
