import React from "react";
import { FaRegTrashAlt, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import Recommendation from "./Recommendation";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
} from "../../Redux/cartSlice";

function Addcard() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const calculateTotal = () =>
    cartItems.reduce((acc, item) => acc + item.count * item.price, 0).toFixed(2);

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id, count) => {
    if (count > 1) dispatch(decrementQuantity(id));
    else dispatch(removeFromCart(id));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="p-4 md:p-6 max-w-7xl w-full mx-auto font-segoe">
      <Link to="/" className="flex items-center gap-2 font-light text-sm mb-4">
        <FiChevronLeft className="text-lg" />
        Back
      </Link>

      <h1 className="text-2xl md:text-3xl font-bold text-blue-900 mb-5">My Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center text-gray-500 text-2xl md:text-4xl py-20">
          🛒 Your cart is empty.
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row sm:items-center bg-blue-100 rounded-2xl px-4 py-3 md:px-5 md:py-4 mb-4 w-full">
              <div className="bg-blue-200 p-2 sm:p-3 rounded-full flex items-center justify-center w-fit">
                <FaShoppingCart className="text-blue-900 text-base sm:text-lg" />
              </div>
              <div className="ml-0 sm:ml-3 mt-2 sm:mt-0">
                <p className="font-semibold text-sm text-black">Service Cart</p>
                <p className="flex items-center text-sm text-blue-900 mt-1">
                  <FaMapMarkerAlt className="text-xs mr-1" /> Shopping in 07114
                </p>
              </div>
            </div>

            <div className="bg-white shadow-md rounded-lg p-3 md:p-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center gap-4 bg-blue-50 rounded-xl p-3 mb-4"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1 w-full sm:flex justify-between items-center">
                    <div className="mb-2 sm:mb-0">
                      <p className="font-bold text-base sm:text-lg">{item.title}</p>
                      <div className="flex gap-2 items-center mt-1">
                        <span className="text-blue-900 font-semibold">₹{item.price}</span>
                        <p className="line-through text-gray-500 text-sm">₹300</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 sm:mt-0">
                      <div className="flex items-center bg-white rounded-full px-3 py-1 gap-2 shadow">
                        <button
                          className="w-6 h-6 rounded-full bg-gray-400 text-white font-bold hover:bg-blue-900"
                          onClick={() => handleDecrement(item.id, item.count)}
                        >
                          −
                        </button>
                        <span className="text-lg font-medium">{item.count}</span>
                        <button
                          className="w-6 h-6 rounded-full bg-gray-400 text-white font-bold hover:bg-blue-900"
                          onClick={() => handleIncrement(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-4">
                        <FaRegTrashAlt
                          className="text-blue-900 text-lg cursor-pointer"
                          onClick={() => handleRemove(item.id)}
                          title="Remove from cart"
                        />
                        <p className="font-bold text-lg">
                          ₹{(item.price * item.count).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-96 max-h-[300px] bg-blue-50 p-4 sm:p-6 rounded-lg shadow-md">
            <p className="text-sm text-gray-500 mb-3 sm:mb-4">
              Free delivery + saving ₹3.00 on this order
              <span className="text-blue-500 cursor-pointer ml-1">Go to</span>
            </p>

            <div className="border-t pt-3 sm:pt-4">
              <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">
                Order summary
              </h2>
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Items total</span>
                <span>₹{calculateTotal()}</span>
              </div>
              <div className="flex justify-between mb-2 text-gray-700">
                <span>Delivery fee</span>
                <span className="font-bold">Free</span>
              </div>
              <div className="flex justify-between font-bold text-gray-800 border-t pt-2 mb-4">
                <span>Subtotal ({totalQuantity} items)</span>
                <span>₹{calculateTotal()}</span>
              </div>
              <button className="w-full bg-indigo-500 hover:bg-blue-900 text-white font-bold py-2 sm:py-3 rounded-full transition duration-300">
                Checkout ₹{calculateTotal()}
              </button>
            </div>
          </div>
        </div>
      )}

      <Recommendation />
    </div>
  );
}

export default Addcard;
