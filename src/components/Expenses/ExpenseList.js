import React from 'react';
import ExpenseItem from './ExpenseItem';

import './ExpenseList.scss';

const ExpenseList = props => {
  if (props.items.length === 0) {
    return <p>No expense found.</p>;
  }

  if (props.items.length > 0) {
    return <ul className="expense-list">
      {props.items.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>)}
    </ul>
  }
};

export default ExpenseList;