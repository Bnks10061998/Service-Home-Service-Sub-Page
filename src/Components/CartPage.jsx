import React from "react";
import { useLocation, Link } from "react-router-dom";

const CartPage = () => {
  const location = useLocation();
  const service = location.state?.service || "No service added";

  return (
    <div className="max-w-3xl mx-auto mt-20 p-4 bg-white rounded shadow">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">Your Cart</h2>

      {service === "No service added" ? (
        <p className="text-gray-600">Your cart is currently empty.</p>
      ) : (
        <div className="bg-gray-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold text-blue-700">{service}</h3>
          <p className="text-sm text-gray-700 mt-1">
            Premium laundry service with free pickup and delivery.
          </p>
          <div className="mt-4 flex gap-2">
            <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
              Proceed to Checkout
            </button>
            <Link to="/">
              <button className="border border-blue-700 text-blue-700 px-4 py-2 rounded hover:bg-blue-50">
                Continue Shopping
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
