"use client";

import { SortOption } from "@/types";

interface FilterBarProps {
  currentSort: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "populer", label: "Populer" },
  { value: "terlaris", label: "Terlaris" },
  { value: "termurah", label: "Harga Termurah" },
];

export default function FilterBar({
  currentSort,
  onSortChange,
}: FilterBarProps) {
  return (
    <div
      id="filter-bar"
      className="flex flex-wrap items-center gap-2 md:gap-3 mb-6 md:mb-8"
    >
      <span className="text-sm font-medium text-gray-500 mr-1">
        Urutkan:
      </span>
      {sortOptions.map((option) => (
        <button
          key={option.value}
          id={`sort-${option.value}`}
          onClick={() => onSortChange(option.value)}
          className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
            currentSort === option.value
              ? "bg-amber-500 text-white shadow-md shadow-amber-200"
              : "bg-white text-gray-600 hover:bg-amber-50 hover:text-amber-700 border border-gray-200"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
