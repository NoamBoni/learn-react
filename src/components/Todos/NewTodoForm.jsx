import React, { useState } from "react";

import AddToListForm from "../global/AddtoListForm";

function NewTodoForm({ addTodo }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [date, setDate] = useState("");

  function updateTitleHandler(event) {
    setTitle(event.target.value);
  }

  function updateBodyHandler(event) {
    setBody(event.target.value);
  }

  function updateDateHandler(event) {
    const [year, month, day] = event.target.value.split("-");
    setDate(`${day}/${month}/${year}`);
  }

  function submitFormHandler() {
    const newTodo = {
      id: Math.random() * 50000,
      title,
      body,
      date,
    };
    addTodo(newTodo);
    setTitle("");
    setBody("");
    setDate("");
  }

  return (
    <>
      <AddToListForm submitHandler={submitFormHandler}>
        <label>title:</label>
        <input value={title} onChange={updateTitleHandler} type="text" />
        <br />
        <label>body:</label>
        <input value={body} onChange={updateBodyHandler} type="text" />
        <br />
        <label>date:</label>
        <input value={date} onChange={updateDateHandler} type="date" />
      </AddToListForm>
    </>
  );
}

export default NewTodoForm;
