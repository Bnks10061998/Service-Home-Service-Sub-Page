import Lottie from "lottie-react";
import React from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import successAnimation from "../Components/MyOrder/tick1.json";
import { Link } from "react-router-dom";

const BookingConfirmation = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-white p-6">
      <div className="flex flex-col items-center mb-6">
      <div className="w-16 h-14 mb-3 sm:w-20 sm:h-16">
            <Lottie animationData={successAnimation}   />
          </div>
         
        {/* </div> */}
        <h1 className="text-2xl font-bold text-[#013686]">Booking Confirmed</h1>
        <p className="text-center text-sm text-gray-600 mt-2 max-w-md">
          Your booking has been confirmed. We've sent a confirmation email with all the details.
        </p>
        <p className="mt-2 text-sm text-gray-700 font-medium">
          You’ve earned <span className="text-black font-bold">5 Servy Coins</span> for booking a service!
        </p>
      </div>

      <div className="bg-white rounded-[2rem] p-6 w-full max-w-md border border-2">
        <div className="flex justify-between text-sm text-gray-700 border-b pb-2">
          <span>Booking Reference</span>
          <span className="font-semibold">B12345</span>
        </div>

        <div className="mt-3">
          <h2 className="font-semibold text-lg">Premium House Cleaning</h2>
          <p className="text-gray-500 text-sm">Clean Pro Services</p>
        </div>

        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <FaCalendarAlt className="text-[#013686]" />
            <span>May 15, 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <FaClock className="text-[#013686]" />
            <span>10:00 AM (3 hours)</span>
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-[#013686]" />
            <span>Entered Address</span>
          </div>
        </div>

        <div className="flex justify-between mt-4 border-t pt-2 text-sm font-semibold">
          <span>Total Paid</span>
          <span>₹134.56</span>
        </div>
      </div>

      <div className="flex gap-16 mt-6">
        <Link to={'/myorders'} className="px-10 py-1 border border-[#013686] text-[#013686] rounded-lg hover:bg-blue-50">
          View My Orders
        </Link>
        <Link to={'/'}  className="px-10 py-1 bg-[#515def] text-white rounded-lg hover:bg-[#013686]">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default BookingConfirmation;
