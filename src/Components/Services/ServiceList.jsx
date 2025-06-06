import React, { useState } from "react";
import HomeServiceCard from "./HomeServiceCard";
import Search from "./Search";
import Wash from "../../assets/webp/Wash & Iron.webp";
import iron from "../../assets/webp/Iron.webp";
import fold from "../../assets/webp/Fold.webp";
import dry from "../../assets/webp/Dry.webp";
import carpet from "../../assets/webp/carpet.webp";
import Steam from "../../assets/webp/steam1.webp";
import Filters from "./Filters";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";

// Services data
const services = [
  { id: "001", title: "Wash & Fold", image: fold, rating: "3.8", reviews: "210", price: "128.78" },
  { id: "002", title: "Wash & Iron", image: iron, rating: "3.2", reviews: "600", price: "128.78" },
  { id: "003", title: "Dry Cleaning", image: dry, rating: "4.2", reviews: "467", price: "128.78" },
  { id: "004", title: "Carpet Cleaning", image: carpet, rating: "4.5", reviews: "752", price: "128.78" },
  { id: "005", title: "Steam iron", image: Steam, rating: "5", reviews: "226", price: "128.78" },
  { id: "006", title: "Ornamented Wedding Dress", image: Wash, rating: "4.8", reviews: "267", price: "128.78" },
];

// Rating range logic
const ratingRanges = {
  5: [4.6, 5],
  4.5: [4.1, 4.5],
  4: [3.6, 4.0],
  3.5: [3.1, 3.5],
};

const ServiceList = () => {
  const dispatch = useDispatch();

  const [filters, setFilters] = useState({
    sortOrder: "",
    selectedCategory: "all",
    selectedRatings: [],
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleFilterChange = (ratings, sortOrder, category) => {
    setFilters({
      selectedRatings: ratings,
      sortOrder,
      selectedCategory: category,
    });
  };

  const filteredServices = services
    .filter((service) => {
      const serviceRating = parseFloat(service.rating);

      const matchesRating =
        filters.selectedRatings.length === 0 ||
        filters.selectedRatings.some((r) => {
          const [min, max] = ratingRanges[r];
          return serviceRating >= min && serviceRating <= max;
        });

      const matchesSearch = service.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesRating && matchesSearch;
    })
    .sort((a, b) => {
      if (filters.sortOrder === "asc") return a.title.localeCompare(b.title);
      if (filters.sortOrder === "desc") return b.title.localeCompare(a.title);
      return 0;
    });

  return (
    <div className="mt-10 px-4 sm:px-6 lg:px-12">
      <Header />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mt-6">
        <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <Filters onFilterChange={handleFilterChange} />
      </div>

      <div className="mt-12 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {filteredServices.map((service) => (
            <HomeServiceCard
              key={service.id}
              service={service}
              handleAddToCart={() => dispatch(addToCart(service))}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
