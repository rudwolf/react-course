import React, { useState } from 'react';
import FormInput from "../UI/FormInput";

import classes from "./AddInvestment.module.scss";
import Button from "../UI/Button";

const AddInvestment = (props) => {
  const [userInput, setUserInput] = useState([]);

  const handleUserInput = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onCalculate(userInput);
  }
  return (
    <form className={classes.form}>
      <div className="input-group">
        <FormInput
          name="current-savings"
          type="number"
          label="Current Savings ($)"
          onChange={handleUserInput}
        />
        <FormInput
          name="yearly-contribution"
          type="number"
          label="Yearly Savings ($)"
          onChange={handleUserInput}
        />
      </div>
      <div className="input-group">
        <FormInput
          name="expected-return"
          type="number"
          label="Expected Interest (%, per year)"
          onChange={handleUserInput}
        />
        <FormInput
          name="duration"
          type="number"
          label="Investment Duration (years)"
          onChange={handleUserInput}
        />
      </div>
      <p className="actions">
        <Button type="reset" className="buttonAlt">Reset</Button>
        <Button type="submit" className="button calculate" onClick={handleSubmit}>Calculate</Button>
      </p>
    </form>
  );
};

export default AddInvestment;
