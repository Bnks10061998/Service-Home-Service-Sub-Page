import React, { createContext, useContext, useState } from "react";

// Create the context
const FilterContext = createContext();

// Create a custom hook to use the context
export const useFilters = () => useContext(FilterContext);

// Create the provider
export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    category: "all",
    minRating: "",
    minRate: ""
  });

  const updateFilters = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
