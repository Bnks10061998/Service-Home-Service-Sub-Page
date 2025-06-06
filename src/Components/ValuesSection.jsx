import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCube,
} from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import sampleImage7 from "../assets/webp/LaundryImage.webp";
import sampleImage1 from "../assets/webp/Event.webp";
import sampleImage44 from "../assets/webp/HomeRepair7.webp";
import sampleImage6 from "../assets/webp/Food.webp";
import sampleImage3 from "../assets/webp/WasteManagementImage.webp";
import sampleImage5 from "../assets/webp/E-sevaImage1.webp";
import sampleImage8 from "../assets/webp/RentalImage2.webp";
import sampleImage11 from "../assets/webp/PersonalImage2.webp";
import sampleImage16 from "../assets/webp/MedicalImage1.webp";

import AOS from "aos";
import "aos/dist/aos.css";
import "./Valuesanimate.css";

export default function ValuesSection() {
  const values = [
    "Professionalism & Expertise",
    "Eco-Friendly & Safe Clean",
    "Customer Satisfaction First",
    "Integrity & Transparency",
    "Efficiency & Reliability",
    "Continuous Improvement",
  ];

  const images = [
    sampleImage7,
    sampleImage5,
    sampleImage44,
    sampleImage6,
    sampleImage1,
    sampleImage3,
    sampleImage8,
    sampleImage11,
    sampleImage16,
  ];

  const valueRows = [
    [values[0]],
    [values[1], values[2]],
    [values[3], values[4]],
    [values[5]],
  ];

  // Initialize AOS (Animate On Scroll)
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 py-12 px-4 sm:px-8 md:px-20 flex flex-col md:flex-row items-start justify-between min-h-[500px] gap-8 sm:gap-10">
      {/* Swiper Section */}
      <div className="md:w-1/2 w-full flex justify-center relative max-w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCube]}
          effect="cube"
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          spaceBetween={20}
          className="w-full max-w-[700px] h-[400px] rounded-xl shadow-lg relative"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}

          <button
            className="custom-swiper-prev absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-blue-100 transition"
            aria-label="Previous"
          >
            <ChevronLeft className="w-6 h-6 text-blue-800" />
          </button>
          <button
            className="custom-swiper-next absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10 hover:bg-blue-100 transition"
            aria-label="Next"
          >
            <ChevronRight className="w-6 h-6 text-blue-800" />
          </button>
        </Swiper>
      </div>

      {/* Values Section */}
      <div className="md:w-1/2 w-full flex flex-col justify-start">
        <div className="flex flex-col items-center justify-center text-center px-4 py-6">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our{" "}
            <span className="animate-border-glow px-2 rounded">
              Values
            </span>
            , Your{" "}
            <span className="animate-border-glow px-2 rounded">
              Satisfaction
            </span>
          </h2>
        </div>

        <div className="space-y-4">
          {valueRows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="flex justify-center gap-4 flex-wrap"
            >
              {row.map((val, index) => {
                let animationEffect = "";
                if (val === "Professionalism & Expertise")
                  animationEffect = "fade-up";
                if (val === "Eco-Friendly & Safe Clean")
                  animationEffect = "fade-right";
                if (val === "Customer Satisfaction First")
                  animationEffect = "zoom-in";
                if (val === "Integrity & Transparency")
                  animationEffect = "fade-left";
                if (val === "Efficiency & Reliability")
                  animationEffect = "fade-down";
                if (val === "Continuous Improvement")
                  animationEffect = "zoom-out";

                return (
                  <div
                    key={index}
                    className="bg-blue-100 hover:bg-blue-200 text-[#013686] font-medium px-4 py-3 rounded-full text-[18px] text-center shadow-md transition-transform duration-300 hover:scale-105 w-full max-w-[260px]"
                    data-aos={animationEffect}
                  >
                    {val}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
