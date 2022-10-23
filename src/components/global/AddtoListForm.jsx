import React from "react";

export default function AddToListForm({ children, submitHandler }) {
  function submit(event) {
    event.preventDefault();
    submitHandler();
  }

  return (
    <form onSubmit={submit}>
      {children}
      <br />
      <button type="submit">submit</button>
    </form>
  );
}
