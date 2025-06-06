import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HTMLFlipBook from "react-pageflip";

import serviceman1 from "../assets/webp/serviceman1.webp";
import serviceman2 from "../assets/webp/serviceman2.webp";
import serviceman3 from "../assets/webp/serviceman3.webp";
import serviceman4 from "../assets/webp/serviceman4.webp";
import serviceman5 from "../assets/webp/serviceman5.webp";
import serviceman6 from "../assets/webp/serviceman6.webp";
import serviceman7 from "../assets/webp/serviceman7.webp";
import serviceman8 from "../assets/webp/serviceman8.webp";
import serviceman9 from "../assets/webp/serviceman9.webp";

// import two from "../assets/two.jpg";
import twice from "../assets/webp/twice.webp";
import team from "../assets/webp/teamwork.webp";
import money from "../assets/webp/dollar.webp";

import { MdArrowOutward } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";

import logo1 from "../assets/webp/logo1.webp";
import logo2 from "../assets/webp/logo2.webp";
import logo3 from "../assets/webp/logo3.webp";
import logo4 from "../assets/webp/logo4.webp";
import logo5 from "../assets/webp/logo5.webp";
import logo6 from "../assets/webp/logo6.webp";
import logo7 from "../assets/webp/logo7.webp";
import logo8 from "../assets/webp/logo8.webp";
import logo9 from "../assets/webp/logo9.webp";

import archBackground from "../assets/webp/arc.webp";
import twos from "../assets/webp/twos.webp";
import bg from "../assets/webp/bg.webp";
import lap1 from "../assets/webp/lap1.webp";
import lap2 from "../assets/webp/lap2.webp";
import lap3 from "../assets/webp/lap3.webp";

import { IoCall } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import bgImage from "../assets/webp/bg.webp";
import bgImage1 from "../assets/webp/anotherbg.webp";


const services = [
  {
    title: "Laundry Services",
    desc: "Quick and professional laundry services right at your doorstep.",
    image: serviceman1,
    link: "/serviceList",
    icon: logo1,
  },
  {
    title: "E-Seva Services",
    desc: "Simplifying all your digital government services in one place.",
    image: serviceman2,
    link: "/eseva",
    icon: logo2,
  },
  {
    title: "Rental Services",
    desc: "Affordable rentals for bikes, appliances, furniture and more.",
    image: serviceman3,
    link: "/rental",
    icon: logo3,
  },
  {
    title: "Event Management",
    desc: "End-to-end planning for weddings, parties, and corporate events.",
    image: serviceman4,
    link: "/event-management",
    icon: logo4,
  },
  {
    title: "Home Repair Services",
    desc: "Skilled professionals for any home repair or improvement job.",
    image: serviceman5,
    link: "/home-repair",
    icon: logo5,
  },
  {
    title: "Personal Care Services",
    desc: "At-home grooming and care from trained experts.",
    image: serviceman6,
    link: "/personal-care",
    icon: logo6,
  },
  {
    title: "Waste Management (0 Cost Service)",
    desc: "Free eco-friendly waste collection and recycling services.",
    image: serviceman7,
    link: "/waste-management",
    icon: logo8,
  },
  {
    title: "Food Services",
    desc: "Order local homemade food and organic products to your home.",
    image: serviceman8,
    link: "/food-services",
    icon: logo7,
  },
  {
    title: "Medical Services",
    desc: "Home healthcare, nurse visits, and medicine delivery.",
    image: serviceman9,
    link: "/medical",
    icon: logo9,
  },
];

const HeroSection = () => {
  const navigate = useNavigate();
  const flipBookRef = useRef();

  const handleBookNow = (link) => {
    navigate(link);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const book = flipBookRef.current?.pageFlip();
      if (book) {
        const currentPageIndex = book.getCurrentPageIndex();

        // If we've reached the last page, loop back to the first page
        if (currentPageIndex >= services.length * 2 - 2) {
          book.flip(0); // Go to the first page (index 0)
        } else {
          book.flipNext(); // Otherwise, flip to the next page
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? services : services.slice(0, 3);

  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const cardColors = ["from-blue-100 to-blue-200"];

  // const cardColors = [
  //   "from-gray-100 to-gray-200", // Soft gray, minimalistic and clean
  //   "from-blue-50 to-blue-100", // Light blue, professional and calming
  //   "from-indigo-50 to-indigo-100", // Indigo for a corporate, elegant feel
  //   "from-green-50 to-green-100", // Soft green, gives a calm, stable feel
  //   "from-teal-50 to-teal-100", // Teal for a modern, fresh vibe
  //   "from-cyan-50 to-cyan-100", // Cyan for a bright, professional touch
  // ];

  return (
    <section className="w-full">
      <h1 className="text-4xl font-bold text-center mb-6 mt-4 text-[#013686]">
        Explore Our Services
      </h1>
      <div className="flex justify-center w-full overflow-hidden">
        <HTMLFlipBook
          width={560}
          height={420}
          size="fixed"
          usePortrait={true}
          showCover={false}
          mobileScrollSupport={true}
          ref={flipBookRef}
        >
          {services.flatMap((service, idx) => [
            // First Page: Text Content
            <div
              key={`content-${idx}`}
              className="bg-white p-6 flex flex-col justify-between"
            >
              <div className="mt-12 flex flex-col items-center">
                <div className="mt-12">
                  <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">
                    {service.title}
                  </h2>
                  <p className="text-gray-800 text-xl mb-4 text-center">
                    {service.desc}
                  </p>
                  <div className="text-center">
                    {" "}
                    <button
                      onClick={() => handleBookNow(service.link)}
                      className="mt-auto px-5 py-3 bg-blue-600 text-white rounded hover:bg-white hover:text-blue-700 border-2 border-blue-600 hover:border-blue-700 transition"
                    >
                      Book Now
                    </button>
                    <button
                      onClick={() => handleBookNow(service.link)}
                      className="mt-auto px-5 py-3 bg-white text-blue-600 border-[1px] border-blue-600  hover:bg-blue-600 hover:border-white hover:text-white rounded transition ml-5 "
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </div>
            </div>,

            // Second Page: Image Only
            <div
              key={`image-${idx}`}
              className="bg-white flex justify-center items-center p-4"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-contain rounded-md "
              />
            </div>,
          ])}
        </HTMLFlipBook>
      </div>

      <div className="max-w-7xl mx-auto mt-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#013686]  mb-4">
          Service at your door step
        </h2>
        <p className=" text-gray-600 mb-10">What service you are looking for</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            {
              icon: logo1,
              title: "Laundry Service",
              desc: "Quick and professional laundry services right at your doorstep.",
              link: "/laundry",
            },
            {
              icon: logo2,
              title: "E-Seva Services",
              desc: "Simplifying all your digital government services in one place.",
              link: "/eseva",
            },
            {
              icon: logo5,
              title: "Home Repair Services",
              desc: "Skilled professionals for any home repair or improvement job.",
              link: "/home-repair",
            },
            {
              icon: logo7,
              title: "Food Services",
              desc: "Order local homemade food and organic products to your home.",
              link: "food-services",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 rounded-2xl p-6 relative overflow-hidden transition w-full max-w-[500px]"
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12 mb-4 rounded-full object-cover"
              />

              <h3 className="text-[#013686] font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>

              {/* Rounded corner with arrow button */}
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-white rounded-tl-[2rem] flex items-center justify-center">
                <button className="bg-white w-10 h-10 rounded-full shadow-md flex items-center justify-center hover:bg-gray-200 transition mt-2">
                  <span
                    className="text-lg font-bold text-black"
                    onClick={() => handleBookNow(service.link)}
                  >
                    <MdArrowOutward />
                  </span>{" "}
                  {/* Right arrow */}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 py-10 md:px-20 bg-white">
        {/* Left Image */}
        <div className="mb-4 md:mb-0">
          <img
            src={twice}
            alt="Service Team"
            className="rounded-lg md:h-[400px] md:w-[500px]" // Increase height and width
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2">
          <h3 className="text-sm font-semibold text-gray-700 uppercase mb-2">
            Who Are We
          </h3>
          <h2 className="text-4xl font-bold text-[#013686] mb-4">
            Most reputed service providers
          </h2>
          <p className="text-gray-600 mb-6">
            Our team consists of certified professionals who are
            background-verified for your peace of mind. You can trust us to
            deliver quality service every time.
          </p>

          {/* Feature 1 */}
          <div className="flex items-start gap-4 mb-4">
            <div className="text-[#013686] text-2xl">
              <img src={team} alt="team" width={50} />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Trusted Professional</h4>
              <p className="text-gray-600">
                All our professionals are certified and trained to ensure
                top-notch service for every client.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex items-start gap-4 mb-6">
            <div className="text-[#013686] text-2xl">
              <img src={money} alt="team" width={50} />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Trusted Money</h4>
              <p className="text-gray-600">
                Secure and easy online payments for all your bookings. Your
                transactions are encrypted and safe with us.
              </p>
            </div>
          </div>

          {/* Button */}
          <button className="bg-[#013686] text-white font-medium px-6 py-2 rounded hover:bg-[#013686] transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Service Section-2 */}

      <div className="bg-white py-12 px-3 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#013686] text-center mb-12">
          Explore Our Most Popular Services Tailored Just for You
        </h2>

        <div className="grid md:grid-cols-3 w-[90%] gap-10 mx-auto">
          {visibleServices.map((service, idx) => (
            <div
              key={idx}
              className={`relative bg-gradient-to-br ${
                cardColors[idx % cardColors.length]
              } text-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-4 group`}
            >
              {/* Service Image */}
              <div className="rounded-2xl overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-52 object-cover transform group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Floating Icon - moved outside image container */}
              <div className="absolute top-[180px] left-1/2 transform -translate-x-1/2 bg-white border border-gray-200 rounded-full p-2 shadow-lg z-10 w-20 h-20 overflow-hidden flex items-center justify-center">
                <img
                  src={service.icon}
                  alt="icon"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Content */}
              <div className="pt-20 text-center px-4">
                <h3 className="text-xl font-semibold text-[#013686] mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <button
                  onClick={() => {
                    setSelectedService(service);
                    setShowModal(true);
                  }}
                  className="text-[#013686] font-semibold flex items-center justify-center mx-auto hover:underline"
                >
                  Read More
                  <MdOutlineArrowForwardIos className="ml-1 text-sm" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Toggle Button */}
        <div className="text-center mt-8">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="text-[#013686] font-semibold underline hover:text-blue-700 transition"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>

        {showModal && selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-gray-300 rounded-2xl p-6 max-w-md w-full shadow-xl relative">
              {/* Close Button */}
              <button
                className="absolute top-1 right-4 text-gray-500 hover:text-gray-800 text-2xl font-bold"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>

              {/* Service Image */}
              <img
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-56 object-cover rounded-xl mb-4"
              />

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-md">
                  <img
                    src={selectedService.icon}
                    alt="icon"
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-3xl font-bold text-[#013686] text-center mb-2">
                {selectedService.title}
              </h3>
              <p className="text-gray-800 text-lg text-center px-2">
                {selectedService.desc} <br />
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Testominal */}

      <div
  className="bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage})` }}
>
  <div>
    <div className="max-w-[2000px] mx-auto mb-14 border-blue-400 p-6 flex flex-col sm:flex-row justify-between items-center text-center space-y-6 sm:space-y-0 sm:space-x-6 bg-white/50 backdrop-blur-md rounded-md">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-20 w-full justify-center items-center">
        {/* Stat 1 */}
        <div>
          <h2 className="text-3xl font-bold">52 +</h2>
          <p className="text-gray-700 font-semibold text-xl">
            Trained Service Experts
          </p>
        </div>

        {/* Stat 2 */}
        <div>
          <h2 className="text-3xl font-bold">7+</h2>
          <p className="text-gray-700 font-semibold text-xl">
            Happy Customers
          </p>
        </div>

        {/* Stat 3 */}
        <div>
          <h2 className="text-3xl font-bold flex items-center justify-center">
            4.9 <span className="text-yellow-500 ml-1">★</span>
          </h2>
          <p className="text-gray-700 font-semibold text-xl">
            Customer Rating
          </p>
        </div>
      </div>
    </div>
  </div>
</div>



      {/* <div
        className="bg-cover bg-center "
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div>
          <div className="max-w-[2000px]  mx-auto mb-14   border-blue-400 p-6 flex flex-col sm:flex-row justify-between items-center text-center space-y-6 sm:space-y-0 sm:space-x-6 bg-white/50 backdrop-blur-md rounded-md h-[200px]">
            <div className="flex ml-80 gap-44">
              
              <div>
                <h2 className="text-3xl font-bold">52 +</h2>
                <p className="text-gray-700 font-semibold text-xl">
                  Trained Service Experts
                </p>
              </div>

              
              <div>
                <h2 className="text-3xl font-bold">7+</h2>
                <p className="text-gray-700 font-semibold text-xl">Happy Customers</p>
              </div>

              
              <div>
                <h2 className="text-3xl font-bold flex items-center justify-center">
                  4.9 <span className="text-yellow-500 ml-1">★</span>
                </h2>
                <p className="text-gray-700 font-semibold text-xl">Customer Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* contact section */}
      <div
  className="relative w-full min-h-[220px] md:h-[180px] mb-12 bg-cover bg-center"
  style={{ backgroundImage: `url(${bgImage1})` }}
>
  {/* Glassy Overlay */}
  <div className="absolute inset-0 bg-white/50 backdrop-blur-md flex flex-col justify-center items-center text-center px-4 py-6">
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-900 mb-4 sm:mb-6">
      Need Help? Book Your Order by Phone or Email
    </h2>

    <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
      {/* Phone */}
      <button className="flex items-center gap-2 bg-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-md text-sm sm:text-base">
        <IoCall /> +91 95973 66741
      </button>

      {/* Email */}
      <button className="flex items-center gap-2 bg-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg shadow-md text-sm sm:text-base">
        <CiMail /> servy@gmail.com
      </button>
    </div>
  </div>
</div>


      {/* <div
        className="relative w-full h-[180px] mb-12 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage1})` }}
      >
        
        <div className="absolute inset-0 bg-white/50 backdrop-blur-md flex flex-col justify-center items-center text-center px-4">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Need Help? Book Your Order by Phone or Email
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
           
            <button className="flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-lg shadow-md">
              <span>
                <IoCall />
              </span>{" "}
              +91 95973 66741
            </button>

            
            <button className="flex items-center gap-2 bg-blue-900 text-white px-8 py-4 rounded-lg shadow-md">
              <span>
                <CiMail />
              </span>{" "}
              servy@gmail.com
            </button>
          </div>
        </div>
      </div> */}

      {/* join client */}

      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-[#013686] flex flex-col md:flex-row items-center justify-between p-8 md:p-16 lg:p-30 h-auto md:h-[280px]">
            {/* Text Section */}
            <div className="text-white md:w-1/2 z-10">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4">
                Join our Team as Professional Partner
              </h3>
              <p className="mb-6 text-sm sm:text-base">
                Looking to grow your skills and earn more? Join our platform as
                a verified service professional. Get access to a steady flow of
                bookings, flexible work hours, and dedicated support – all while
                doing what you do best.
              </p>
              <div className="text-center m-5">
                <button className="bg-white text-[#013686] font-semibold px-5 py-2 rounded-md border border-white hover:bg-[#013686] hover:text-white transition">
                  JOIN NOW
                </button>
              </div>
            </div>

            {/* Full Image Section - Only visible on md and larger screens */}
            <div className="md:w-1/2 flex justify-center relative mt-12 mb-28 md:mt-0">
              {/* First Big Arch (Visible on md and up) */}
              <img
                src={archBackground}
                alt="Big Arch Background"
                className="absolute w-[150px] sm:w-[200px] md:w-[300px] top-5 md:top-28 right-12 z-0 hidden md:block"
              />

              {/* Second Smaller Arch (Visible on md and up) */}
              <img
                src={archBackground}
                alt="Small Arch Background"
                className="absolute w-[120px] sm:w-[150px] md:w-[200px] top-10 md:top-40 right-14 md:right-24 z-10 hidden md:block"
              />

              {/* Main Foreground Image (Visible on md and up) */}
              <img
                src={twos}
                alt="Partner Visual"
                className="relative z-20 max-h-96 object-contain md:right-28 w-32 md:left-20 sm:w-48 md:w-full hidden md:block"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Steps Section */}

      <div
        className="bg-cover bg-center py-14"
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="text-center mb-10">
          <h3 className="text-sm font-semibold text-white uppercase">
            Process
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-2">
            Simple Steps to Get Your Service
          </h2>
          <p className="mt-4 text-white text-base sm:text-lg max-w-2xl mx-auto">
            Our streamlined process ensures you receive top-notch service
            quickly and efficiently. Just follow these three easy steps to enjoy
            a hassle-free experience.
          </p>
        </div>
        <div className="bg-gray-200 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 rounded-xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className=" rounded-lg p-6">
              <img
                src={lap1}
                alt="Choose service"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Step 1: Choose Your Service
              </h3>
              <p className="text-black font-semibold">
                Select from a variety of services tailored to your needs.
              </p>
            </div>

            <div className=" p-6">
              <img
                src={lap2}
                alt="Schedule appointment"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Step 2: Schedule Your Appointment
              </h3>
              <p className="text-black font-semibold">
                Pick a time that works best for you.
              </p>
            </div>

            <div className=" p-6">
              <img
                src={lap3}
                alt="Enjoy service"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">
                Step 3: Enjoy Your Service
              </h3>
              <p className="text-black font-semibold">
                Sit back and relax while our professionals take care of
                everything.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-10 text-center">
          <button className="bg-[#013686] text-white px-6 py-2 rounded-lg hover:bg-[#013686] transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
