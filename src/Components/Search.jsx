
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Search = ({ searchTerm, onSearchChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex items-center ml-16 mt-0 w-full max-w-2xl p-2 border border-blue-100 rounded-full shadow-[0_4px_10px_rgba(0,0,0,0.3)] bg-white">
      <FaSearch
        className={`ml-3 transition-all duration-300 transform cursor-pointer ${
          isFocused ? "text-blue-500 scale-125" : "text-gray-400 scale-100"
        } hover:text-blue-400 hover:scale-110`}
      />
      <input
        type="text"
        placeholder="Search Laundry Services..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="flex-1 px-4 py-2 bg-transparent focus:outline-none text-sm text-gray-700"
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </div>
  );
};

export default Search;
