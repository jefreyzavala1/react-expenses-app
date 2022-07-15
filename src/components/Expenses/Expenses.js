import React,{useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
const Expenses = (props) => {
  //store picked year here in state?
  //listen to date picked then forward date to here
  const [filteredYear,setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear =>{
       setFilteredYear(selectedYear);

  }
  return (
    
    <div>
    <Card className = 'expenses'>
    <ExpensesFilter selected = {filteredYear} onFilterChangeHandler={filterChangeHandler}/>
      <ExpenseItem
        title={props.expense[0].title}
        amount={props.expense[1].amount}
        date={props.expense[0].date}
      ></ExpenseItem>

      <ExpenseItem
        title={props.expense[1].title}
        amount={props.expense[1].amount}
        date={props.expense[1].date}
      ></ExpenseItem>

      <ExpenseItem
        title={props.expense[2].title}
        amount={props.expense[2].amount}
        date={props.expense[2].date}
      ></ExpenseItem>

      <ExpenseItem
        title={props.expense[3].title}
        amount={props.expense[3].amount}
        date={props.expense[3].date}
      ></ExpenseItem>
    </Card>
    </div>
  );
};

export default Expenses;
