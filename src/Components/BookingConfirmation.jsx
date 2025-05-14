import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle } from "lucide-react";

const BookingConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const {
    title = "Premium Wash & Fold Service",
    rating = "4.7",
    bookingId = "LND12345",
  } = location.state || {};

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-blue-900 mb-2">Booking Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for booking <span className="font-semibold text-blue-700">{title}</span>.
        </p>

        <div className="bg-gray-100 rounded-md p-4 text-left text-sm text-gray-700 mb-6">
          <p><strong>Booking ID:</strong> {bookingId}</p>
          <p><strong>Service:</strong> {title}</p>
          <p><strong>Rating:</strong> {rating} ★</p>
          <p><strong>Status:</strong> Confirmed</p>
          <p><strong>Location:</strong> Vellore</p>
          <p><strong>Time:</strong> Within 24 hours</p>
        </div>

        <button
          onClick={() => navigate("/")}
          className="bg-blue-700 text-white px-5 py-2 rounded-md font-medium hover:bg-blue-800"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default BookingConfirmation;
