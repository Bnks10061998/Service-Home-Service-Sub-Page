import { React, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/cartSlice";

// { id,image, title, rating, reviews, price ,handleAddToCart}
const HomeServiceCard = ({service}) => {
// console.log(service);
const { title, rating, reviews, image,id } = service;

  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleBookNow = (id) => {
    navigate(`/laundry-details/${id}`, { state: { title, rating,reviews } });
  };

    const handleAddToCart = (service) => {
    dispatch(addToCart(service));
    console.log(service);
    
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 w-[23rem] transition-shadow duration-300 hover:shadow-xl">
      <img src={image} alt={title} className="h-60 w-full object-cover rounded-lg" />
      <h3 className="mt-2 text-lg font-semibold">{title}</h3>
      <p className="text-gray-500 text-sm">Clean Pro Services</p>
      <div className="flex justify-between items-center mt-2 text-sm">
        <span className="flex items-center space-x-1">
          <span className="text-yellow-400 text-xl">★</span>
          <span className="text-black text-base">{rating}</span>
          <span className="text-gray-500">({reviews})</span>
        </span>
      </div>
      <div className="flex justify-between items-center mt-2">
        <button
          className="px-10 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
          onClick={()=>handleBookNow(id)}
        >

          Book Now
        </button>
        <button
          className="px-4 py-2 bg-blue-0 text-blue-700 border border-blue-700 rounded-lg font-medium hover:bg-blue-50 transition-colors duration-200"
         onClick={() => handleAddToCart(service)}
            // () =>
            // navigate("/cart", { state: { service: title } })
          // }
        >
          {/* Add to Cart */}
          <span className="flex items-center space-x-2">
            <ShoppingCartIcon className="w-5 h-5 stroke-blue-800 fill-white" />
            <span>Add to Cart</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default HomeServiceCard;
