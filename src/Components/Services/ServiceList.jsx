import React, { useState } from "react";
import HomeServiceCard from "./HomeServiceCard";
import Search from "./Search";
import Wash from "../../assets/Wash & Iron.jpg";
import iron from "../../assets/Iron.jpg";
import fold from "../../assets/Fold.jpg";
import dry from "../../assets/Dry.jpg";
import carpet from "../../assets/carpet.jpg";
import Steam from "../../assets/steam1.jpg";
import Filters from "./Filters";
import Header from "../Header";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";

const services = [
  {
    id: "001",
    title: "Wash & Fold",
    image: fold,
    rating: "3.8",
    reviews: "210",
    price:"128.78"
  },
  {
    id: "002",
    title: "Wash & Iron",
    image: iron,
    rating: "3.2",
    reviews: "600",
    price:"128.78"
  },
  {
    id: "003",
    title: "Dry Cleaning",
    image: dry,
    rating: "4.2",
    reviews: "467",
     price:"128.78"
  },
  {
    id: "004",
    title: "Carpet Cleaning",
    image: carpet,
    rating: "4.5",
    reviews: "752",
     price:"128.78"
  },
  {
    id: "005",
    title: "Steam iron",
    image: Steam,
    rating: "5",
    reviews: "226",
     price:"128.78"
  },
  {
    id: "006",
    title: "Ornamented Wedding Dress",
    image: Wash,
    rating: "4.8",
    reviews: "267",
     price:"128.78"
  },
];



const ratingRanges = {
  5: [4.6, 5],
  4.5: [4.1, 4.5],
  4: [3.6, 4.0],
  3.5: [3.1, 3.5],
};

const ServiceList = () => {

const dispatch = useDispatch();

const handleAddToCart = (service) => {
  dispatch(addToCart(service)); // full object sent to Redux store
};

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

  const { selectedRatings, sortOrder } = filters;

  const filteredServices = services
    .filter((service) => {
      const serviceRating = parseFloat(service.rating);

      const matchesRating =
        selectedRatings.length === 0 ||
        selectedRatings.some((r) => {
          const [min, max] = ratingRanges[r];
          return serviceRating >= min && serviceRating <= max;
        });

      const matchesSearch = service.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

      return matchesRating && matchesSearch;
    })
    .sort((a, b) => {
      if (sortOrder === "asc") {
        return a.title.localeCompare(b.title);
      } else if (sortOrder === "desc") {
        return b.title.localeCompare(a.title);
      }
      return 0;
    });

  return (
    <div className="mt-10">
      <Header />
      <div className="flex justify-between mt-5">
        <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        <Filters onFilterChange={handleFilterChange} />
      </div>
      <div className="mt-12 mb-10 px-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16">
          {filteredServices.map((service) => (
            <HomeServiceCard key={service.id}  service={service}  handleAddToCart={handleAddToCart} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceList;
