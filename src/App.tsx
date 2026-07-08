import React, { useState } from "react";
import type { Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodos = {
      id: Date.now(),
      text: input,
      done: false,
    };
    setTodos([...todos, newTodos]);
    setInput("");
  };

  const onkeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  return (
    <>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={onkeydown}
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
