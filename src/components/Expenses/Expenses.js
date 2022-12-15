import React, {useState} from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from './ExpensesChart';

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
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenseList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;