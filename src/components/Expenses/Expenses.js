import './Expenses.scss';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';

function Expenses({list}) {
  return(
    <Card className="expenses">
    {list.map((list, i) => {
      return (
        <ExpenseItem key={i} title={list.title} amount={list.amount} date={list.date} />
      );
    })}
    </Card>
  );
}

export default Expenses;