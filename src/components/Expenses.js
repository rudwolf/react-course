import './Expenses.scss';
import ExpenseItem from "./ExpenseItem";

function Expenses({list}) {
  return(
    <div className="expenses">
    {list.map((list, i) => {
      return (
        <ExpenseItem key={i} title={list.title} amount={list.amount} date={list.date} />
      );
    })}
    </div>
  );
}

export default Expenses;