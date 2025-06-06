// OrderCard.jsx
import React, { useState } from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const OrderCard = ({ order }) => {

 const [showTracking, setShowTracking] = useState(false);

  const toggleTracking = () => {
    setShowTracking(prev => !prev);
  };

const steps = [
  { label: "Order Placed", date: "May 18" },
  { label: "Picked Up", date: "May 18" },
  { label: "Processing", date: "May 19" },
  { label: "Out for Delivery", date: "May 20" },
  { label: "Delivered", date: "May 20" },
];

const navigate = useNavigate();

  const renderButtons = () => {
    switch (order.status) {
     
      case "On Progress":
        return (
          <>
          <button className="myOrder_btn" onClick={toggleTracking}>
  {showTracking ? "Hide Tracking" : "Track Order"}
</button>
          </>
        );
      case "Delivered":
        return (
          <>
            <button className="myOrder_btn ">
              Book Again
            </button>
            <button className="flex-1 bg-[#515def] text-white text-sm py-2 rounded-xl hover:bg-[#013686]"
            onClick={() => navigate("/feedback")}
            >
              Leave a Comment
            </button>
          </>
        );
      case "Cancelled":
        return (
          <>
            <button className="myOrder_btn">
              Book Service
            </button>
            <button className="flex-1 bg-[#515def] text-white text-sm py-2 rounded-xl hover:bg-[#013686]">
              Contact Support
            </button>
          </>
        );
      }
    };
  
    return (
  <div className="w-full border rounded-2xl p-6 space-y-2 shadow-sm">
    <div className="flex gap-4">
      
      <div className="flex-1">
     
<div className="flex flex-col md:flex-row md:justify-between md:items-center">
  {/* Image and Text Block */}
  <div className="flex gap-4 md:gap-7 items-center">
    {/* Image Left */}
    <img
      src={order.image}
      alt="Laundry Service"
      className="w-28 h-28 rounded-md object-cover"
    />

    {/* Text */}
    <div className="">
      <h3 className="font-semibold text-base">{order.title}</h3>
      <p className="text-sm text-gray-500">{order.provider}</p>

      {/* Mobile: status below */}
      <span className="mt-2 inline-block bg-blue-100 text-[#013686] text-sm px-3 py-1 rounded-full md:hidden">
        {order.status}
      </span>
    </div>
  </div>

  {/* Desktop: status aligned far right */}
  <span className="hidden md:inline-block bg-blue-100 text-[#013686] text-sm px-3 py-1 rounded-full">
    {order.status}
  </span>
</div>

        <hr className="my-3 border-t-[3px] border-gray-300" />
        <div className="mt-3 space-y-1 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaCalendarAlt size={16} />
            {order.date}
          </div>
          <div className="flex items-center gap-2">
            <FaClock size={16} />
            {order.time} ({order.duration})
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt size={16} />
            {order.address}
          </div>
        </div>

        <hr className="my-3 border-t-[3px] border-gray-300" />

        <div className="flex justify-between items-center">
          <p className="text-sm font-medium">Total Paid</p>
          <p className="text-sm font-semibold">₹{order.amount}</p>
        </div>

       <div className="mt-4 flex gap-3">
  {renderButtons()}
</div>
<div
  className={`transition-all duration-300 ease-in-out overflow-hidden ${
    showTracking ? "max-h-40 mt-4 p-4 border" : "max-h-0  mt-4 "
  } bg-gray-50 rounded-xl `}
>
{showTracking && (
  <div className="mt-4 p-4 bg-gray-50 rounded-xl border">
    <div className="relative flex items-center justify-between w-full">
      {/* Base Gray Line */}
      <div className="absolute top-[34px] left-24 w-[80%] h-2 bg-gray-300 z-0 rounded-full"></div>

      {/* Progress Bar Line */}
      <div
        className="absolute top-[34px] left-24 h-2 bg-[#013686] z-10 rounded-full transition-all duration-300"
        style={{
  width: `${order.currentStep === 4 ? order.currentStep * 20 : (order.currentStep / (steps.length - 1)) * 100}%`,
}}

      ></div>

      {/* Steps */}
      {steps.map((step, index) => {
       const isCompleted = index <= order.currentStep;


        return (
          <div
            key={index}
            className="relative z-20 flex flex-col items-center text-center w-1/5"
          >
            <span
              className={`text-sm font-medium mb-2 ${
                isCompleted ? "text-[#013686]" : "text-gray-500"
              }`}
            >
              {step.label}
            </span>

            <div
              className={`w-5 h-5 rounded-full border-4 ${
                isCompleted
                  ? "bg-[#013686] border-[#013686]"
                  : "bg-gray-400 border-gray-400"
              }`}
            ></div>

            <span className="mt-2 text-xs text-gray-500">{step.date}</span>
          </div>
        );
      })}
    </div>
  </div>
)}


</div>

        </div>
      </div>
    </div>
);
};
export default OrderCard;


