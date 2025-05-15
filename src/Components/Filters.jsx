import React, { useState } from "react";
import { FaChevronDown, FaFilter, FaStar } from "react-icons/fa";

const Filters = ({ onFilterChange }) => {
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [sortOrder, setSortOrder] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleRatingChange = (e) => {
    const ratingValue = parseFloat(e.target.value);
    setSelectedRatings((prev) =>
      prev.includes(ratingValue)
        ? prev.filter((rating) => rating !== ratingValue)
        : [...prev, ratingValue]
    );
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const applyFilters = () => {
    onFilterChange(selectedRatings, sortOrder, selectedCategory);
  };

  const clearFilters = () => {
    setSelectedRatings([]);
    setSortOrder("");
    setSelectedCategory("all");
    onFilterChange([], "", "all");
  };

  return (
    <div className="flex gap-5 mt-4 pr-32 justify-end items-center">
      {/* Category Dropdown */}
      {/* <div className="relative">
        <FaChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
        <select
          className="appearance-none pl-8 pr-4 py-3 border bg-blue-100 min-w-[200px] rounded shadow-sm text-base"
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="all">All Categories</option>
          <option value="wash_dry_fold">Wash, Dry, Fold</option>
          <option value="shoe_laundry">Shoe Laundry</option>
          <option value="ironing">Ironing</option>
          <option value="starch_clothes">Starch Clothes</option>
          <option value="dry_cleaning">Dry Cleaning</option>
          <option value="dyeing_vats">Dyeing Vats</option>
        </select>
      </div> */}

      <div
        className="relative"
        onMouseEnter={() => setIsDropdownOpen(true)}
        onMouseLeave={() => setIsDropdownOpen(false)}
      >
        <button className="flex items-center gap-2 border px-8 py-3 rounded bg-blue-100 text-blue-700 text-base">
          <FaFilter className="text-blue-700" />
          Filters
        </button>

        {isDropdownOpen && (
          <div className="absolute top-13 right-0 bg-white border rounded shadow-lg w-64 p-4 z-20">
            {/* Ratings Filter */}
            <div className="mb-4">
              <span className="text-gray-700 text-sm mb-2 block font-medium">
                Ratings
              </span>
              {[
                { value: 5, label: "Outstanding" },
                { value: 4.5, label: "Excellent" },
                { value: 4, label: "Very Good" },
                { value: 3.5, label: "Good" },
              ].map(({ value, label }) => (
                <label key={value} className="flex items-center space-x-2 mb-2">
                  <input
                    type="checkbox"
                    value={value}
                    checked={selectedRatings.includes(value)}
                    onChange={handleRatingChange}
                    className="w-4 h-4 border-gray-400"
                  />
                  <span className="text-sm text-gray-800 flex items-center gap-1">
                    {value}
                    <FaStar className="text-yellow-500 text-xs" />
                    <span className="ml-1">{label}</span>
                  </span>
                </label>
              ))}
            </div>

<div className="mb-4">
  <span className="text-gray-700 text-sm mb-2 block font-medium">
    Sort by Name
  </span>
  <div className="flex flex-col gap-2">
    <label className="inline-flex items-center gap-2">
      <input
        type="radio"
        name="sortOrder"
        value="asc"
        checked={sortOrder === "asc"}
        onChange={(e) => setSortOrder(e.target.value)}
        className="accent-blue-500"
      />
      <span className="text-sm text-gray-800">A to Z</span>
    </label>
    <label className="inline-flex items-center gap-2">
      <input
        type="radio"
        name="sortOrder"
        value="desc"
        checked={sortOrder === "desc"}
        onChange={(e) => setSortOrder(e.target.value)}
        className="accent-blue-500"
      />
      <span className="text-sm text-gray-800">Z to A</span>
    </label>
  </div>
</div>
            <div className="flex gap-2">
              <button
                onClick={applyFilters}
                className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
              >
                Apply Filters
              </button>
              <button
                onClick={clearFilters}
                className="w-full bg-gray-200 text-gray-700 py-2 rounded hover:bg-gray-300"
              >
                Clear
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Filters;
