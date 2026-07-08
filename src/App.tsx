import React, { useEffect, useReducer, useState } from "react";
import type { FilterType, Todo, TodoAction } from "./types";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import FilterButtons from "./components/FilterButtons";

function todoReducer(state: Todo[], action: TodoAction) {
  switch (action.type) {
    case "ADD": {
      const newTodo: Todo = {
        id: Date.now(),
        text: action.payload,
        done: false,
      };
      return [...state, newTodo];
    }

    case "TOGGLE":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo,
      );

    case "DELETE":
      return state.filter((todo) => todo.id !== action.payload);
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState<string>("");
  const [filter, setFilter] = useState<FilterType>("all");

  const addTodo = () => {
    if (input.trim() === "") return;
    dispatch({
      type: "ADD",
      payload: input,
    });
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodo();
    }
  };

  const toggleDone = (id: number) => {
    dispatch({
      type: "TOGGLE",
      payload: id,
    });
  };

  const deleteTodo = (id: number) => {
    dispatch({
      type: "DELETE",
      payload: id,
    });
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
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Todo List</h1>
      <TodoInput
        input={input}
        setInput={setInput}
        handleKeyDown={handleKeyDown}
        addTodo={addTodo}
      />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList
        todos={filteredTodos}
        toggleDone={toggleDone}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
