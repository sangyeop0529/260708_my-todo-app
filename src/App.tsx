import React, { useEffect, useState } from "react";
import type { FilterType, Todo } from "./types";

function App() {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState<string>("");
  const [filter, setFilter] = useState<FilterType>("all");

  const addTodo = () => {
    if (input.trim() === "") return;
    const newTodo = {
      id: Date.now(),
      text: input,
      done: false,
    };
    setTodos([...todos, newTodo]);
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const toggleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo,
      ),
    );
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "all") return true;
    if (filter === "done") return todo.done;
    return !todo.done;
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <div className="flex gap-2 mb-4">
        <input
          className="border rounded px-3 py-2 flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={addTodo}
        >
          추가
        </button>
      </div>
      <div className="flex gap-2 mb-4">
        <button
          className={`px-3 py-1 rounded ${
            filter === "all"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setFilter("all")}
        >
          전체
        </button>
        <button
          className={`px-3 py-1 rounded ${
            filter === "done"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setFilter("done")}
        >
          완료
        </button>
        <button
          className={`px-3 py-1 rounded ${
            filter === "active"
              ? "bg-blue-500 text-white"
              : "bg-gray-100 text-gray-600"
          }`}
          onClick={() => setFilter("active")}
        >
          미완료
        </button>
      </div>
      <ul className="space-y-2">
        {filteredTodos.map((todo) => (
          <li
            className="flex items-center gap-2 p-2 border-b border-gray-200"
            key={todo.id}
          >
            <input
              className="w-4 h-4"
              type="checkbox"
              onChange={() => toggleDone(todo.id)}
              checked={todo.done}
            />
            <span
              className={`flex-1 ${todo.done ? "line-through text-gray-400" : "text-gray-800"}`}
            >
              {todo.text}
            </span>
            <button
              className="text-red-500 text-sm hover:text-red-700"
              onClick={() => deleteTodo(todo.id)}
            >
              삭제
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
