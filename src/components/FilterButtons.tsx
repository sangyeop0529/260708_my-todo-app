import type { FilterType } from "../types";

interface FilterButtonsProps {
  filter: FilterType;
  setFilter: (filter: FilterType) => void;
}

const FilterButtons = ({ filter, setFilter }: FilterButtonsProps) => {
  return (
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
  );
};

export default FilterButtons;
