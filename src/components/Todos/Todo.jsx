import React from "react";
import RemoveButton from "../global/RemoveButtom";

import style from "./Todo.module.css";

function Todo(props) {
  return (
    <div className={style.container}>
      <h5>{props.title}</h5>
      <p>{props.body}</p>
      <RemoveButton color={style.delete} removeFunc={props.removeTodo} id={props.id} />
      <p>{props.date}</p>
    </div>
  );
}

export default Todo;
