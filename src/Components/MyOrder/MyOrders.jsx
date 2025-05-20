

import React, { useState } from "react";
import OrderCard from "./OrderCard";
import laundry from "../../assets/webp/Laundry.webp"

const orders = [
  {
    id: 1,
    image:laundry,
    title: "Premium Wash and Fold Service",
    provider: "Clean Pro Service",
    status: "On Progress",
    date: "May 15, 2025",
    time: "10:00 AM",
    duration: "3 hours",
    address: "Entered Address",
    amount: 134.56,
     currentStep: 3,
      trackingDates: {
    "Order Confirmed": "Wed, 20 May",
    "In Progress": "Wed, 20 May",
    "Scheduled": "Thu, 21 May",
    "On the Way": "Sat, 24 May",
    "Completed": "Sat, 24 May",
  },
  },
  {
    id: 2,
    image:laundry,
    title: "Home Repair",
    provider: "Clean Pro Service",
    status: "On Progress",
    date: "May 15, 2025",
    time: "10:00 AM",
    duration: "3 hours",
    address: "Entered Address",
    amount: 134.56,
     currentStep: 2
  },
  {
    id: 3,
    image:laundry,
    title: "Ac Service",
    provider: "Clean Pro Service",
    status: "Delivered",
    date: "May 15, 2025",
    time: "10:00 AM",
    duration: "3 hours",
    address: "Entered Address",
    amount: 134.56,
     currentStep: 2
  },
  {
    id: 4,
    image:laundry,
    title: "E-seva",
    provider: "Clean Pro Service",
    status: "Cancelled",
    date: "May 15, 2025",
    time: "10:00 AM",
    duration: "3 hours",
    address: "Entered Address",
    amount: 134.56,
     currentStep: 3
  },
];

export default function MyOrders() {
  const [activeStatus, setActiveStatus] = useState("On Progress");

  const filteredOrders =
    activeStatus === "On Progress"
      ? orders
      : orders.filter((order) => order.status === activeStatus);

  const statuses = ["On Progress", "Delivered", "Cancelled"];

  return (
    <div className="p-4 max-w-6xl w-full mx-auto ">
      <button className="text-sm text-gray-500 mb-2">&lt; Back</button>
      <h2 className="text-2xl text-[#013686] font-semibold">My Orders</h2>
      <p className="text-sm text-gray-500 mb-4">
        View and manage your service bookings.
      </p>

      <div className="flex flex-wrap gap-2 md:gap-4 mb-4 ">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setActiveStatus(status)}
            className={`flex md: text-sm md:text-lg py-1 md:py-2 px-3 md:px-10 rounded-full font-medium border transition-colors duration-200 ${
              activeStatus === status
                ? "bg-blue-100 text-[#013686] "
                : "text-gray-600"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-1 xl:grid-cols-1">

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6"> */}
        {filteredOrders.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </div>
  );
}
