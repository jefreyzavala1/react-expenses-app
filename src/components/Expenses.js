import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
function Expenses(props){
return(
<div>
    <div className="expenses ">
    <ExpenseItem
    title={props.expense[0].title}
    amount={props.expense[1].amount}
    date={props.expense[0].date}
  ></ExpenseItem>
</div>
<div className="expenses ">
  <ExpenseItem
    title={props.expense[1].title}
    amount={props.expense[1].amount}
    date={props.expense[1].date}
  ></ExpenseItem>
</div>
<div className="expenses ">
  <ExpenseItem
    title={props.expense[2].title}
    amount={props.expense[2].amount}
    date={props.expense[2].date}
  ></ExpenseItem>
  </div>

<div className="expenses ">
  <ExpenseItem
    title={props.expense[3].title}
    amount={props.expense[3].amount}
    date={props.expense[3].date}
  ></ExpenseItem>
  </div>
</div> )

}

export default Expenses;