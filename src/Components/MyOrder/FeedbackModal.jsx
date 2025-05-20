import React from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import laundry from "../../assets/webp/Laundry.webp";
import Lottie from "lottie-react";
import successAnimation from "../MyOrder/tick1.json";

export default function FeedbackModal({ onCancel, onSubmit }) {
  return (
    <div className="fixed inset-0 bg-black/15 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-xl p-4 sm:p-6 w-[90%] max-w-lg shadow-xl">
        <div className="flex flex-col items-center text-center sm:text-left">
          <div className="w-16 h-14 mb-3 sm:w-20 sm:h-16">
            <Lottie animationData={successAnimation} autoplay />
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold text-[#013686] mb-1">
            Service Completed Successfully
          </h2>
          <p className="text-xs md:text-sm text-gray-600 mb-4 sm:mb-6">
            We’d love to hear your feedback to keep improving!
          </p>

          <div className="w-full border rounded-lg overflow-hidden mb-4 px-3 py-2">
            <div className="flex items-center gap-4">
              <img
                src={laundry}
                alt="Laundry Service"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-md object-cover"
              />
              <div className="text-center sm:text-left">
                <h3 className="font-semibold text-sm sm:text-base">
                  Premium Wash and Fold Service
                </h3>
                <p className="text-xs text-gray-500">Clean Pro Service</p>
              </div>
            </div>

            <hr className="my-3 border-t-[2px] border-gray-200" />

            <div className="space-y-1 text-xs md:text-sm text-gray-700">
              <div className="flex items-center gap-2">
                <FaCalendarAlt size={12} />
                May 15, 2025
              </div>
              <div className="flex items-center gap-2">
                <FaClock size={12} />
                10:00 AM (3 hours)
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt size={12} />
                Entered Address
              </div>
            </div>
          </div>

          <p className="text-xs md:text-sm text-gray-700 mb-3 md:text-center sm:text-left">
            We value your opinion — share your feedback to help us make your
            experience even better!
          </p>

          <div className="w-full flex flex-col gap-3 sm:gap-4">
            <button
              className="bg-[#013686] text-white text-sm sm:text-base py-2 rounded-xl hover:bg-[#012c59] transition"
              onClick={onSubmit}
            >
              Submit Feedback
            </button>
            <button
              className="border border-gray-300 text-sm sm:text-base py-2 rounded-xl hover:bg-gray-100 transition"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

