import { React } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";

const HomeServiceCard = ({ service }) => {
  const { title, rating, reviews, image, id } = service;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBookNow = (id) => {
    navigate(`/laundry-details/${id}`, { state: { title, rating, reviews, image } });
  };

  const handleAddToCart = () => {
    dispatch(addToCart(service));
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 w-full sm:max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-sm transition-shadow duration-300 hover:shadow-xl mx-auto">
      <img
        src={image}
        alt={title}
        className="h-60 w-full object-cover rounded-xl"
      />
      <h3 className="mt-3 text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm">Clean Pro Services</p>

      <div className="flex items-center gap-1 mt-2 text-sm">
        <span className="text-yellow-400 text-xl">★</span>
        <span className="text-black text-base">{rating}</span>
        <span className="text-gray-500">({reviews})</span>
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4">
        <button
          className="w-full sm:w-auto px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-colors duration-200"
          onClick={() => handleBookNow(id)}
        >
          Book Now
        </button>
        <button
          className="w-full sm:w-auto px-4 py-2 text-blue-700 border border-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
          onClick={handleAddToCart}
        >
          <span className="flex items-center justify-center gap-2">
            <ShoppingCartIcon className="w-5 h-5 stroke-blue-800 fill-white" />
            <span>Add to Cart</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default HomeServiceCard;
