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
} from "../Redux/cartSlice";

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
        <div className="text-center text-gray-500 text-3xl md:text-5xl py-20">
          🛒 Your cart is empty.
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Section */}
          <div className="flex-1">
            <div className="flex md:items-center bg-blue-100 rounded-2xl px-4 py-3 md:px-5 md:py-4 mb-4 w-full">
              <div className="bg-blue-200 p-2 sm:p-3 rounded-full flex items-center justify-center">
                <FaShoppingCart className="text-blue-900 text-base sm:text-lg" />
              </div>
              <div className="ml-3">
                <p className="font-semibold text-sm text-black m-0">Service Cart</p>
                <p className="flex items-center text-sm text-blue-900 mt-1">
                  <FaMapMarkerAlt className="text-xs mr-1" /> Shopping in 07114
                </p>
              </div>
            </div>

           
              <div
               
                className="bg-white shadow-md rounded-lg p-3 md:p-4 min-h-56"
              >
                 {cartItems.map((item) => (
                <div 
                 key={item.id} className="flex items-center gap-4 bg-blue-50 rounded-xl p-3 mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <div className="flex-1 md:flex justify-between items-center">
                    <div>
                      <p className="font-bold">{item.title}</p>
                      <div className="flex gap-2 items-center">
                        <span className="text-blue-900 font-semibold">₹{item.price}</span>
                        <p className="line-through text-gray-500 text-sm">₹300</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-3 md:mt-0">
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
                      <div className="flex items-center gap-4">
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
          <div className="w-full lg:w-96 bg-blue-50 p-4 sm:p-6 rounded-lg shadow-md">
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
                <span>Subtotal({totalQuantity} items)</span>
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








// import React from "react";
// import "./Addcard.css";
// import { FaRegTrashCan } from "react-icons/fa6";
// import { useState } from 'react';
// import { FaShoppingCart, FaMapMarkerAlt } from 'react-icons/fa';
// import Recommendation from "./Recommendation";
//  function Addcard() {
//  const [count, setCount] = useState(1);
//   const unitPrice = 128.78;

//   const increment = () => setCount(prev => prev + 1);
//   const decrement = () => {
//     if (count > 1) setCount(prev => prev - 1);
//   };

//   const totalPrice = (unitPrice * count).toFixed(2);
//   return (
//    <> <div className="cart-container">
//       <button className="back-button" >
//       <span className="back-arrow">&#8592;</span>
//       Back
//     </button>
//       <h1 className="cart-title">My Cart</h1>

//       <div className="cart-main">
      
//         <div className="cart-left">
        
//       <div className="service-cart">
//       <div className="icon-wrapper">
//         <FaShoppingCart className="icon" />
//       </div>
//       <div className="text-content">
//         <p className="title">Service Cart</p>
//         <p className="subtitle">
//           <FaMapMarkerAlt className="location-icon" />
//           &nbsp;Shopping in 07114
//         </p>
//       </div>
//     </div>

//       <div className="cardsecond">
//      <div className="cart-item">
//       <img
//         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlabJRQKI_jPRMi0FCwlgwBt5Rh81CwNxsbQHRYqXH-QziUYtQjng4JnwVofXlT8povw&usqp=CAU"
//         alt="Premium Wash"
//         className="item-image"
//       />
//       <div className="item-details">
//         <p className="item-title">Premium Wash and Fold Service</p>
//         <div className="item-prices">
//           <span className="item-new-price">₹{unitPrice}</span>
//           <p className="item-old-price">₹300</p>
//         </div>
//       </div>

//       <div className="counter-wrapper">
//         <button className="circle-btn subicon" onClick={decrement}>−</button>
//         <span className="count">{count}</span>
//         <button className="circle-btn addicon" onClick={increment}>+</button></div>
//         <div className=" fs-5"> 
//           <FaRegTrashCan className="remove-btn"/>
//         </div>
//         <p className="item-price">₹{totalPrice}</p>
//       </div>
//       </div>
   

          
//         </div>

//         <div className="">
//           <div className="order-summary">
//       <div className="info-text">
//         Free delivery + saving ₹3.00 on this order
//         <span className="info-link">Go to</span>
//       </div>
//       <div className="summary-details">
//       <h2>Order summary</h2>
//         <div className="summary-row">
//           <span>Items total</span>
//           <span>{totalPrice}</span>
//         </div>
//         <div className="summary-row">
//           <span>Delivery fee</span>
//           <span className="free">Free</span>
//         </div>
//         <div className="summary-row subtotal">
//           <span>Subtotal</span>
//           <span>₹{totalPrice}</span>
//         </div>
//         <button className="checkout-button">Checkout ₹134.56</button>
//       </div>
//     </div>
//         </div>
       
//       </div>
//       <Recommendation/>
      
//     </div></>
  
//   );
// }
// export default Addcard;


