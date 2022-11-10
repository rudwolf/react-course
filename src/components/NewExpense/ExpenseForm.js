import React, { useState } from 'react';
import './ExpenseForm.scss';

const ExpenseForm = () => {
  const [userInput,  setUserInput]   = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      enteredTitle: e.target.value,
    });
    console.log(userInput);
  }

  const amountChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      enteredAmount: e.target.value,
    });
    console.log(userInput);
  }

  const dateChangeHandler = (e) => {
    setUserInput({
      ...userInput,
      enteredDate: e.target.value,
    });
    console.log(userInput);
  }

  return <form>
    <div className="new-expense__controls">
      <div className="new-expense__control">
        <label htmlFor="">Title</label>
        <input type="text" name="" id="" onChange={titleChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label htmlFor="">Amount</label>
        <input type="number" min="0.01" step="0.01" name="" id="" onChange={amountChangeHandler} />
      </div>
      <div className="new-expense__control">
        <label htmlFor="">Date</label>
        <input type="date" min="2019-01-01" max="2022-12-31" name="" id="" onChange={dateChangeHandler} />
      </div>
    </div>
    <div className="new-expense__actions">
      <button type="submit">Add Expense</button>
    </div>
  </form>;
}

export default ExpenseForm;
