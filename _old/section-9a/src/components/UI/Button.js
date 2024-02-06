import React from "react";
import styles from "./Button.module.scss";

const Button = (props) => {
  let btnClassName = styles.button;
  if (props.className === 'buttonAlt') {
    btnClassName = styles.buttonAlt;
  }
  return (
    <button type={props.type || "button"} className={btnClassName} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
