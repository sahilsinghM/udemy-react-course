import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/NewExpense/NewExpense";
import React, { useState } from "react";

const DUMMY_EXPENSES = [
  { id: "e1", date: new Date(2019, 7, 30), title: "Russian", amount: 5 },
  { id: "e2", date: new Date(2022, 7, 30), title: "Ukrainian", amount: 5 },
  { id: "e3", date: new Date(2021, 7, 30), title: "Pakistani", amount: 5 },
  { id: "e4", date: new Date(2020, 7, 30), title: "Indian", amount: 5 },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const newExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expenses data={expenses} />
    </div>
  );
};

export default App;
