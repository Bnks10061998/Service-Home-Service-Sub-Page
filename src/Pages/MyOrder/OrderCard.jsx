// OrderCard.jsx
import React from "react";
import { FaCalendarAlt, FaClock, FaMapMarkerAlt } from "react-icons/fa";


const OrderCard = ({ order }) => {
  const renderButtons = () => {
    switch (order.status) {
     
      case "On Progress":
        return (
          <>
            <button className="myOrder_btn">
              Track Order
            </button>
           
          </>
        );
      case "Delivered":
        return (
          <>
            <button className="myOrder_btn ">
              Book Again
            </button>
            <button className="flex-1 bg-[#515def] text-white text-sm py-2 rounded-xl hover:bg-[#013686]">
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

        <div className="mt-3 flex gap-3">
        {renderButtons()}
        </div>
      </div>
    </div>
  </div>
);
};
export default OrderCard;


