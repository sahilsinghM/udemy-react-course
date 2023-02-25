import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

const NewExpense = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const ExpenseData = { ...enteredExpenseData, id: Math.random.toString() };
    props.onNewExpense(ExpenseData);
    setIsCollapsed(true);
  };
  const cancelExpenseDataHandler = () => {
    setIsCollapsed(true);
  };

  let content;

  const clickHandler = () => {
    setIsCollapsed(false);
  };

  content = isCollapsed ? (
    <button onClick={clickHandler}>Add a new expense</button>
  ) : (
    <ExpenseForm
      onSaveExpenseData={saveExpenseDataHandler}
      onCancelExpenseData={cancelExpenseDataHandler}
    />
  );
  return <div className="new-expense">{content}</div>;
};

export default NewExpense;
