import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.scss';

const Expenses = ({list}) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const storeFilteredYear = (filteredYearValue) => {
    setFilteredYear(filteredYearValue);
  }

  return(
    <div>
      <ExpensesFilter selected={filteredYear} sendFilteredYear={storeFilteredYear}/>
      <Card className="expenses">
      {list.map((list, i) => {
        return (
          <ExpenseItem key={i} title={list.title} amount={list.amount} date={list.date} />
        );
      })}
      </Card>
    </div>
  );
}

export default Expenses;