import React from "react";

import classes from "./FormInput.module.scss";

const FormInput = (props) => {
  return (
    <p className={classes.input}>
      <label htmlFor={props.name}>{props.label}</label>
      <input type={props.type || "text"} id={props.name} name={props.name} onChange={props.onChange} />
    </p>
  );
};

export default FormInput;