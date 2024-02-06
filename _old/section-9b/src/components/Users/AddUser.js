import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import styles from "./AddUser.module.scss";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();

    if (nameInputRef.current.value.trim().length === 0 || ageInputRef.current.value.trim().length === 0) {
      setError({
        'title': 'Invalid input',
        'message': 'Please enter a valid name and age (non-empty values)',
      });
      return;
    }
    if (+ageInputRef.current.value < 1) {
      setError({
        'title': 'Invalid age',
        'message': 'Please enter a valid age (> 0)',
      });
      return;
    }
    props.onAddUser(nameInputRef.current.value,ageInputRef.current.value);
    nameInputRef.current.value  = '';
    ageInputRef.current.value   = '';
  };

  const dismissHandler = () => {
    setError(null);
  }

  return (
    <>
      {error && <ErrorModal title={error.title} message={error.message} onDismiss={dismissHandler} />}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
