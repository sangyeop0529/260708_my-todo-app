interface TodoInputProps {
  input: string;
  setInput: (value: string) => void;
  addTodo: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
const TodoInput = ({
  input,
  setInput,
  handleKeyDown,
  addTodo,
}: TodoInputProps) => {
  return (
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
  );
};

export default TodoInput;
