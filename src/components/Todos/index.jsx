import React, { useState } from "react";

import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const raw_todos = [
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
    date: "22/9/2022",
  },
  {
    id: 3,
    title: "do project",
    body: "if you want to get job",
    date: "21/9 - the end",
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

  return (
    <>
      <NewTodoForm addTodo={addTodo} />
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
