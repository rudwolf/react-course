import React, { useState } from 'react';

import './NewExpense.scss';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
  const [IsEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    }
    props.onAddExpense(expenseData);
  }

  const startEditingHandler = () => {
    setIsEditing(prevState => !prevState);
  };

  return (
    <div className='new-expense'>
      {!IsEditing && <button onClick={startEditingHandler}>Add Expense</button> }
      {IsEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onHideForm={startEditingHandler}
        />
      )}
    </div>
  );

}

export default NewExpense;