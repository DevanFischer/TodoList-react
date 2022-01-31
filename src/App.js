import Header from "./components/Header";
import Todo from "./components/Todo";
import Form from "./components/Form";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([]);

  const toggleComplete = (i) =>
    setTodos(
      todos.map((todo, k) =>
        k === i ? { ...todo, complete: !todo.complete } : todo
      )
    );

  return (
    <>
      <Header />
      <Form
        onSubmit={(text) => setTodos([{ text, complete: false }, ...todos])}
      />
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
      <button onClick={() => setTodos([])}>RESET</button>
    </>
  );
}

export default App;
