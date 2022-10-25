import React, { useState } from "react";

import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import SortButton from "../global/SortButton";

const raw_todos = [
  {
    id: 3,
    title: "do project",
    body: "if you want to get job",
    date: "17/9/2022",
  },
  {
    id: 1,
    title: "wake up",
    body: "you need to wake up",
    date: "21/9/2022",
  },
  {
    id: 2,
    title: "wear pants",
    body: "you need to wear oants",
    date: "22/5/2022",
  },
];

function Todos() {
  const [todos, setTodos] = useState(raw_todos);

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  function removeTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function createDate(str_date) {
    const splitted = str_date.split("/");
    const reversed = splitted.reverse();
    reversed[1] -= 1;
    return new Date(reversed);
  }

  function sortCallback(a, b) {
    const date1 = createDate(a.date);
    const date2 = createDate(b.date);
    return date1 - date2;
  }

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <br />
      <SortButton setData={setTodos} callback={sortCallback} />
      <br />
      <br />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          body={todo.body}
          date={todo.date}
          removeTodo={removeTodo}
          id={todo.id}
        />
      ))}
    </>
  );
}

export default Todos;
