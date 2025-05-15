import React from "react";
import RecommendationCard from "./RecommendationCard";
import "./Recommendation.css";
import image from "../assets/addcard/image2.png"
import IRon from "../assets/addcard/iron.png"
import ac from "../assets/addcard/ac.png"
import Bathroom from "../assets/addcard/bothroom.png"
import Rental from "../assets/addcard/rental.png"


import  { useRef } from "react";
const services = [
  {
    image: image,
    title: "Dry Clean Service",
    rate: 80,
    price: 128.78,
  },
  {
    image:IRon,
    title: "Steam Ironing",
    rate: 80,
    price: 128.78,
  },
  {
    image:ac,
    title: "AC Service",
    rate: 80,
    price: 128.78,
  },
  {
    image: Bathroom,
    title: "Bathroom Cleaning Service",
    rate: 80,
    price: 128.78,
  },
   {
    image: Rental,
    title: "Rental service",
    rate: 80,
    price: 128.78,
  },
];

const App = () => {
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
 <div className="recommendations-section">
  <h3>Recommendations</h3>

  <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginBottom: '10px' }}>
    <button className="scroll-button left" onClick={() => scroll("left")}>
      &#x276E;
    </button>
    <button className="scroll-button right" onClick={() => scroll("right")}>
      &#x276F;
    </button>
  </div>

  <div className="scroll-wrapper">
    <div className="recommendations-scroll" ref={scrollRef}>
      {services.map((service, index) => (
        <RecommendationCard key={index} {...service} />
      ))}
    </div>
  </div>
</div>

  );
}

export default App;
