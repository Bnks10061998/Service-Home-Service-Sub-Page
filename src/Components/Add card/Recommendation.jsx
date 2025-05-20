import React, { useRef } from "react";
import image from "../../assets/webp/image2.webp";
import IRon from "../../assets/webp/Iron.webp";
import ac from "../../assets/webp/ac.webp";
import Bathroom from "../../assets/webp/bothroom.webp";
import Rental from "../../assets/webp/rental.webp";


const services = [
  { image: IRon, title: "Dry Clean Service", rate: 80, price: 128.78 },
  { image: image, title: "Steam Ironing", rate: 80, price: 128.78 },
  { image: ac, title: "AC Service", rate: 80, price: 128.78 },
  {
    image: Bathroom,
    title: "Bathroom Cleaning Service",
    rate: 80,
    price: 128.78,
  },
  { image: Rental, title: "Rental service", rate: 80, price: 128.78 },
  // 👇 To test "empty" state, temporarily replace the array with: []
];

const Recommendation = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      const scrollAmount = 200;
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="px-6 py-10 font-sans">
      <div className="flex justify-between gap-3 mb-4 items-center">
        <h3 className="text-xl font-semibold mb-4">Recommendations</h3>
        <div className="flex gap-3 mb-2">
          <button
            className="w-10 h-10 rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200 text-xl"
            onClick={() => scroll("left")}
          >
            &#x276E;
          </button>
          <button
            className="w-10 h-10 rounded-full border border-gray-300 bg-gray-100 hover:bg-gray-200 text-xl"
            onClick={() => scroll("right")}
          >
            &#x276F;
          </button>
        </div>
      </div>

      {services.length === 0 ? (
        <div className="text-center text-gray-500 text-lg py-10">
          Your cart is empty.
        </div>
      ) : (
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide py-2"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#f0f4ff] rounded-2xl w-[210px] pb-2 h-fit flex-shrink-0 text-sm overflow-hidden"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-[90%] h-auto mx-auto mt-3 rounded-2xl"
                />
                <div className="px-3 pt-2">
                  <h4 className="text-sm font-medium mb-2">{service.title}</h4>
                  <div className="font-semibold text-gray-700">
                    ₹ {service.rate}/hr
                  </div>
                  <div className="font-bold text-black">₹ {service.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Recommendation;


