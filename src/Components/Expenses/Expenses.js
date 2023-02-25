import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2019");
  let expenseArray = props.data.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );
  const filterChangeHandler = (enteredYear) => {
    setSelectedYear(enteredYear);
  };

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          enteredYear={selectedYear}
          onYearChange={filterChangeHandler}
        />
        <ExpenseList data={expenseArray} />
      </Card>
    </li>
  );
};

export default Expenses;
