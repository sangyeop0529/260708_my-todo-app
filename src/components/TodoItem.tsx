import type { Todo } from "../types";

interface Props {
  todo: Todo;
  toggleDone: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem = ({ todo, toggleDone, deleteTodo }: Props) => {
  return (
    <li className="flex items-center gap-2 p-2 border-b border-gray-200">
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
  );
};

export default TodoItem;
