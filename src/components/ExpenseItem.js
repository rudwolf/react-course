import './ExpenseItem.scss';

function ExpenseItem() {
  const expenseDate = new Date(2022, 7, 4);
  const expenseTitle = "Kitchen Fix";
  const expenseValue = 667.66;

  return (
      <div className='expense-item'>
        <div>{expenseDate.toDateString()}</div>
        <div className='expense-item__description'>
          <h2>{expenseTitle}</h2>
          <div className='expense-item__price'>${expenseValue}</div>
        </div>
      </div>
  );
}

export default ExpenseItem;