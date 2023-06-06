import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import styles from './CourseInput.module.scss';

// const FormControl = styled.div`
//   margin: 0.5rem 0;

//   & label {
//     font-weight: bold;
//     display: block;
//     margin-bottom: 0.5rem;
//     color: ${props => (props.invalid ? 'red' : 'inherit')};
//   }

//   & input {
//     display: block;
//     width: 100%;
//     border: 2px solid ${props => (props.invalid ? 'red' : '#ccc')};
//     font: inherit;
//     background-color: ${props => (props.invalid ? '#f0b5b5' : 'transparent')};
//     line-height: 1.5rem;
//     padding: 0 0.25rem;
//   }

//   & input:focus {
//     outline: none;
//     background: #fad0ec;
//     border-color: #8b005d;
//   }

//   & .goalInputError {
//     color: red;
//     display: ${props => (props.invalid ? 'block' : 'none')};
//   }`;

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div invalid={!isValid} className={`${styles['form-control']} ${!isValid && styles.invalid}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
        <div className={`${styles['goalInputError']} ${!isValid && styles.invalid}`}>Please type something on the field above</div>
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
