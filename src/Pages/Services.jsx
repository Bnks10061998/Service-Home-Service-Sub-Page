import React, { useEffect, useState } from "react";
import serviceman1 from "../assets/serviceman1.jpg";
import serviceman2 from "../assets/serviceman2.jpg";
import serviceman3 from "../assets/serviceman3.jpg";
import serviceman4 from "../assets/serviceman4.jpg";
import serviceman5 from "../assets/three.png";
import serviceman6 from "../assets/serviceman6.jpg";
import serviceman7 from "../assets/serviceman7.jpg";
import serviceman8 from "../assets/serviceman8.jpg";
import serviceman9 from "../assets/serviceman9.jpg";

import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpg";
import service4 from "../assets/service4.jpg";
import service5 from "../assets/service5.jpg";
import service6 from "../assets/service6.jpg";
import service7 from "../assets/service7.jpg";
import service8 from "../assets/service8.jpg";
import service9 from "../assets/service9.jpg";

import trust from "../assets/trust.jpg";
import trans from "../assets/trans.jpg";

import { Link } from "react-router-dom";

const images = [
  serviceman1,
  serviceman2,
  serviceman3,
  serviceman4,
  serviceman5,
  serviceman6,
  serviceman7,
  serviceman8,
  serviceman9,
];

const Services = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  // Updated Services List with images
  const servicesList = [
    {
      title: "Laundry",
      image: service1,
      description: " We provide the best laundry service in town.",
      link: "/laundry",
      rating: 4.5, // Use a number instead of emoji
    },

    {
      title: "E-Seva",
      image: service2,
      description: "We provide the best E-Seva service in town.",
      link: "/beauty",
      rating: 4.5,
    },
    {
      title: "Rental Service",
      image: service3,
      description: "We provide the best rental service in town.",
      link: "/plumbing",
      rating: 4.0,
    },
    {
      title: "Event Management",
      image: service4,
      description: "We provide the best event management service in town.",
      link: "/house-cleaning",
      rating: 3.5,
    },
    {
      title: "Home Repair",
      image: service5,
      description: "We provide the best home repair service in town.",
      link: "/pet-grooming",
      rating: 3.0,
    },
    {
      title: "Personal Care",
      image: service6,
      description: "We provide the best Personal Care service in town.",
      link: "/personal-care",
      star: "⭐",
      rating: 4.0,
    },
    {
      title: "Waste Management",
      image: service7,
      description: "We provide the best waste management service in town.",
      link: "/vehicle-repair",
      star: "⭐",
      rating: 4.0,
    },
    {
      title: "Food Product",
      image: service8,
      description: "We provide the best food product service in town.",
      link: "/vehicle-repair",
      star: "⭐",
      rating: 4.0,
    },
    {
      title: "Medical Service",
      image: service9,
      description: "We provide the best medical service in town.",
      link: "/vehicle-repair",
      star: "⭐",
      rating: 4.0,
    },
  ];
  
  const renderStars = (rating) => {
    const stars = [];
    const totalStars = 5;

    for (let i = 1; i <= totalStars; i++) {
      if (i <= Math.floor(rating)) {
        // Full Star
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.675h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27 1.2 3.675c.3.921-.755 1.688-1.54 1.117L10 13.011l-3.137 2.463c-.784.571-1.838-.196-1.538-1.117l1.2-3.675-3.124-2.27c-.783-.57-.38-1.81.588-1.81h3.862l1.2-3.675z" />
          </svg>
        );
      } else if (i - rating < 1) {
        // Half Star
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <defs>
              <linearGradient id={`half-grad-${i}`}>
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              fill={`url(#half-grad-${i})`}
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.675h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27 1.2 3.675c.3.921-.755 1.688-1.54 1.117L10 13.011l-3.137 2.463c-.784.571-1.838-.196-1.538-1.117l1.2-3.675-3.124-2.27c-.783-.57-.38-1.81.588-1.81h3.862l1.2-3.675z"
            />
          </svg>
        );
      } else {
        // Empty Star
        stars.push(
          <svg
            key={i}
            className="w-5 h-5 text-gray-300"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.2 3.675h3.862c.969 0 1.371 1.24.588 1.81l-3.124 2.27 1.2 3.675c.3.921-.755 1.688-1.54 1.117L10 13.011l-3.137 2.463c-.784.571-1.838-.196-1.538-1.117l1.2-3.675-3.124-2.27c-.783-.57-.38-1.81.588-1.81h3.862l1.2-3.675z" />
          </svg>
        );
      }
    }

    return stars;
  };

  const features = [
    {
      title: "Trusted Professionals",
      description: "Our experts are reliable and skilled",
      image: trust,
    },
    {
      title: "Transparent Pricing",
      description: "No hidden fees or extra charges",
      image: trans,
    },
  ];

  const testimonials = [
    {
      name: "Sara M.",
      review: "Great service! Will definitely use again",
      rating: 5,
    },
    {
      name: "Mark F.",
      review: "Professional staff and quick response",
      rating: 5,
    },
    {
      name: "Eva S.",
      review: "Highly recommend for household services",
      rating: 5,
    },
  ];

  return (
    <div className="w-full  min-h-screen">
      <div className=" max-w-6xl mx-auto relative overflow-hidden rounded-2xl pt-4">
        <div
          className="h-96 flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              className="w-full h-full flex-shrink-0 rounded-2xl"
              alt={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50"
        >
          &#8592;
        </button>
        <button
          onClick={goToNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50"
        >
          &#8594;
        </button>

        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              className={`h-2 w-2 rounded-full ${
                idx === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>
      </div>

      {/* Services Grid Section */}
      <div className="max-w-6xl mx-auto py-8 px-4 mt-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl text-center font-semibold">
            Service Categories
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {servicesList.map((service, index) => (
            <div
              key={index}
              className="bg-[#013696] rounded-xl shadow-lg hover:shadow-xl transition flex flex-col h-[400px]"
            >
              {/* Image with fixed height */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />

              {/* Card Content */}
              <div className="p-4 flex flex-col justify-between flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-lg font-medium text-white">
                    {service.title}
                  </div>
                  <div className="flex items-center text-sm text-yellow-400">
                    <span className="flex mr-1">
                      {renderStars(service.rating)}
                    </span>
                    <span>{service.rating}/5</span>
                  </div>
                </div>

                <div className="pt-5">
                  <p className="text-white">{service.description}</p>
                </div>

                <div className="mt-auto">
                  <Link to={service.link}>
                    <button className="w-full bg-white hover:bg-[#013686] text-black hover:text-white border border-transparent hover:border-white font-semibold py-2 rounded-full text-base shadow-md transition duration-300 ease-in-out">
                      Book Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* why choose */}

      <div className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Why Choose Least Action?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-[#013686] shadow-sm border rounded-lg p-6"
              >
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-24 h-24 object-cover rounded-sm"
                />
                <div className="text-left">
                  <h3 className="text-lg font-semibold mb-1 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-white">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testominals */}

      <div
        className="relative bg-[#013686] py-16 px-6 rounded-lg"
        // style={{
        //   backgroundImage: `url(${feedback})`,
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        //   backgroundPosition: "center",
        // }}
      >
        <div className="relative max-w-6xl mx-auto text-center text-white">
          <h2 className="text-4xl font-extrabold mb-12">
            Customer Testimonials
          </h2>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-left shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 flex items-center justify-center bg-gray-200 text-black font-bold rounded-full text-base">
                      {testimonial.name.charAt(0)}
                    </div>
                    <p className="font-semibold text-sm text-gray-800">
                      {testimonial.name}
                    </p>
                  </div>
                  <div className="text-yellow-500 text-sm">
                    {"★".repeat(testimonial.rating)}
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {testimonial.review}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
