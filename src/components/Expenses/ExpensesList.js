import React from "react";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = props =>{
    //{props.items.length === 0 && <p>No expenses found.</p>}
    let expensesContent = <p>No expenses found.</p>
    if(props.items.length > 0){
      expensesContent = props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
      return <ul className="expenses-list">

      </ul>
}

export default ExpensesList;