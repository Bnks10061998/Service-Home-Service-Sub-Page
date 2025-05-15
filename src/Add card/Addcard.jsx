import React from "react";
import "./Addcard.css";
import { FaRegTrashCan } from "react-icons/fa6";
import { useState } from 'react';
import { FaShoppingCart, FaMapMarkerAlt } from 'react-icons/fa';
import Recommendation from "./Recommendation";
 function Addcard() {
 const [count, setCount] = useState(1);
  const unitPrice = 128.78;

  const increment = () => setCount(prev => prev + 1);
  const decrement = () => {
    if (count > 1) setCount(prev => prev - 1);
  };

  const totalPrice = (unitPrice * count).toFixed(2);
  return (
   <> <div className="cart-container">
      <button className="back-button" >
      <span className="back-arrow">&#8592;</span>
      Back
    </button>
      <h1 className="cart-title">My Cart</h1>

      <div className="cart-main">
      
        <div className="cart-left">
        
      <div className="service-cart">
      <div className="icon-wrapper">
        <FaShoppingCart className="icon" />
      </div>
      <div className="text-content">
        <p className="title">Service Cart</p>
        <p className="subtitle">
          <FaMapMarkerAlt className="location-icon" />
          &nbsp;Shopping in 07114
        </p>
      </div>
    </div>

      <div className="cardsecond">
     <div className="cart-item">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAlabJRQKI_jPRMi0FCwlgwBt5Rh81CwNxsbQHRYqXH-QziUYtQjng4JnwVofXlT8povw&usqp=CAU"
        alt="Premium Wash"
        className="item-image"
      />
      <div className="item-details">
        <p className="item-title">Premium Wash and Fold Service</p>
        <div className="item-prices">
          <span className="item-new-price">₹{unitPrice}</span>
          <p className="item-old-price">₹300</p>
        </div>
      </div>

      <div className="counter-wrapper">
        <button className="circle-btn subicon" onClick={decrement}>−</button>
        <span className="count">{count}</span>
        <button className="circle-btn addicon" onClick={increment}>+</button></div>
        <div className=" fs-5"> 
          <FaRegTrashCan className="remove-btn"/>
        </div>
        <p className="item-price">₹{totalPrice}</p>
      </div>
      </div>
   

          
        </div>

        <div className="">
          <div className="order-summary">
      <div className="info-text">
        Free delivery + saving ₹3.00 on this order
        <span className="info-link">Go to</span>
      </div>
      <div className="summary-details">
      <h2>Order summary</h2>
        <div className="summary-row">
          <span>Items total</span>
          <span>{totalPrice}</span>
        </div>
        <div className="summary-row">
          <span>Delivery fee</span>
          <span className="free">Free</span>
        </div>
        <div className="summary-row subtotal">
          <span>Subtotal</span>
          <span>₹{totalPrice}</span>
        </div>
        <button className="checkout-button">Checkout ₹134.56</button>
      </div>
    </div>
        </div>
       
      </div>
      <Recommendation/>
      
    </div></>
  
  );
}
export default Addcard;