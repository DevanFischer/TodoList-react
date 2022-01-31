import React from "react";

const TodoList = ({ todos, setTodos }) => {
  const toggleComplete = (i) =>
    setTodos(
      todos.map((todo, k) =>
        k === i ? { ...todo, complete: !todo.complete } : todo
      )
    );
  return (
    <div>
      {todos.map(({ text, complete }, i) => (
        <div
          key={i}
          onClick={() => toggleComplete(i)}
          style={{
            textDecoration: complete ? "line-through" : "",
          }}
        >
          {text}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
