import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.scss';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const storeFilteredYear = (filteredYearValue) => {
    setFilteredYear(filteredYearValue);
  }

  const filteredExpenses = props.expenseList.filter(expense => { return expense.date.getFullYear().toString() === filteredYear } );

  return(
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} sendFilteredYear={storeFilteredYear}/>
        {
        filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)
        /* {props.expenseList.map((expense, i) => {
          return (
            <ExpenseItem key={i} title={expense.title} amount={expense.amount} date={expense.date} />
          );
        })} */}
      </Card>
    </div>
  );
}

export default Expenses;