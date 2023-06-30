import React from "react";
import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModal.module.scss";

const ErrorModal = (props) => {
  return (
    <>
      <div className={classes.backdrop} onClick={props.onDismiss}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onDismiss}>Close</Button>
        </footer>
      </Card>
    </>
  );
};

export default ErrorModal;
