import React, { useEffect, useState } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import image from "../assets/servy.png";
import { Link } from "react-router-dom";
import {
  FiUserPlus,
  FiLogIn,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { GiWallet } from "react-icons/gi";
import { FaBoxOpen } from "react-icons/fa";

const Navbar = ({count = 3 }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [address, setAddress] = useState("");

  // const detectLocation = () => {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       async (position) => {
  //         const { latitude, longitude } = position.coords;
  //         const response = await fetch(
  //           `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
  //         );
  //         const data = await response.json();
  //         setAddress(data.display_name || `${latitude}, ${longitude}`);
  //       },
  //       (error) => {
  //         alert("Location access denied or failed.");
  //       }
  //     );
  //   } else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // };

  const detectLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const response = await fetch(
              `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`
            );
            const data = await response.json();
            setAddress(data.display_name || `${latitude}, ${longitude}`);
          } catch (err) {
            alert("Failed to fetch location address.");
          }
        },
        (error) => {
          alert("Location access denied or unavailable.");
        },
        {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        }
      );
    } else {
      alert("Geolocation not supported in this browser.");
    }
  };

  const services = [
    "Laundry Services",
    "E-Seva Services",
    "Rental Services",
    "Event Management",
    "Home Repair Services",
    "Personal Care Services",
    "Waste Management",
    "Food Services",
    "Medical Services",
  ];

  // first term

  // const [currentIndex, setCurrentIndex] = useState(0);
  // const [searchTerm, setSearchTerm] = useState("");

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % services.length);
  //   }, 3000); // Change every 3 seconds

  //   return () => clearInterval(interval); // Cleanup on unmount
  // }, [services.length]);

  // 2nd method

  const [searchTerm, setSearchTerm] = useState("");
  const [animatedText, setAnimatedText] = useState("");
  const [serviceIndex, setServiceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (searchTerm) return; // Don't run animation if user is typing

    const currentService = services[serviceIndex];
    let typingSpeed = isDeleting ? 50 : 50;

    const timeout = setTimeout(() => {
      const updatedText = currentService.substring(0, charIndex);
      setAnimatedText(updatedText);

      if (!isDeleting && charIndex < currentService.length) {
        setCharIndex((prev) => prev + 1);
      } else if (!isDeleting && charIndex === currentService.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex > 0) {
        setCharIndex((prev) => prev - 1);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setServiceIndex((prev) => (prev + 1) % services.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, serviceIndex, searchTerm]);

  return (
    <nav className="bg-[#003D99] px-10 py-3 flex items-center justify-between shadow-md sticky top-0 z-50">
      {/* Left: Logo, Name, Location, Search */}
      <div className="flex items-center gap-2 text-white">
        <Link to = "/" className="flex items-center space-x-2">
          {/* <img src={image} alt="Logo" className="w-12 h-12" /> */}
          {/* <h1 className="text-2xl font-semibold text-white tracking-wide uppercase font-serif hover:text-yellow-400 transition duration-300 drop-shadow-md">
            SERVY
          </h1> */}

          <img
            src={image}
            alt="Logo"
            className="w-12 h-12 rounded-full transition duration-300 hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-white/70"
          />

          <h1 className="text-3xl font-bold text-white tracking-widest uppercase font-serif hover:scale-105 transition duration-300 drop-shadow-lg">
            SERVY
          </h1>
          </Link>
        

        {/* Location Dropdown */}
        <div className="relative ml-6">
          {/* Main Location Button */}
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center bg-white text-gray-500 rounded-lg px-6 py-2 shadow-md w-64 overflow-hidden"
          >
            <GoLocation className="mr-2 text-lg" />
            <div className="flex-grow flex items-center justify-between overflow-hidden">
              <span className="text-left truncate text-sm">
                {address || "Location"}
              </span>
              {address && (
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent modal from opening
                    setAddress("");
                  }}
                  className="ml-2 text-gray-400 hover:text-gray-600 text-sm font-bold"
                >
                  ×
                </button>
              )}
            </div>
            <svg
              className="w-4 h-4 ml-auto"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Modal */}
          {showModal && (
            <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg w-80 shadow-lg relative">
                {/* Close Button */}
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl font-bold"
                >
                  ×
                </button>

                <h2 className="text-lg font-semibold mb-4 text-[#013686]">
                  Select Your Location
                </h2>

                {/* Input with Clear Button */}
                <div className="relative mb-4">
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                    className="w-full px-3 py-2 pr-10 border rounded-md text-black"
                  />
                  {address && (
                    <button
                      onClick={() => setAddress("")}
                      className="absolute right-3 top-2 text-gray-400 hover:text-gray-600 text-lg"
                    >
                      ×
                    </button>
                  )}
                </div>

                {/* Divider */}
                <div className="text-center my-2 text-gray-400 text-sm">or</div>

                {/* Detect Location */}
                <button
                  onClick={detectLocation}
                  className="w-full bg-blue-500 text-white px-3 py-2 rounded-md mb-4"
                >
                  Detect Current Location
                </button>

                {/* Add Address */}
                <button
                  onClick={() => setShowModal(false)}
                  className="w-full bg-green-600 text-white px-3 py-2 rounded-md"
                >
                  Add Address
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Search Box */}

        {/* first method */}

        {/* <div className="flex items-center bg-white text-gray-500 rounded-lg px-4 py-2 shadow-md w-72 ml-4">
          <FaSearch className="mr-2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Search for "${services[currentIndex]}"`} // shows animated placeholder
            className="w-full text-sm focus:outline-none focus:ring-0"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="ml-2 focus:outline-none"
            >
              <FaTimes className="text-gray-400 hover:text-gray-600 text-sm" />
            </button>
          )}
        </div> */}

        {/* 2nd type */}

        <div className="flex items-center bg-white text-gray-500 rounded-lg px-4 py-2 shadow-md w-72 ml-4">
          <FaSearch className="mr-2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={`Search for "${animatedText}"`}
            className="w-full text-sm focus:outline-none focus:ring-0"
          />

          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="ml-2 focus:outline-none"
            >
              <FaTimes className="text-gray-400 hover:text-gray-600 text-lg" />
            </button>
          )}
        </div>
      </div>

      {/* Middle: Nav Links */}
        <div className="flex items-center gap-11 text-white text-xl font-semibold">
          <Link to="/" className="group relative">
            Home
            <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 transform -translate-x-1/2 group-hover:translate-x-0"></span>
          </Link>
          <Link to="/Service" className="group relative">
            Services
            <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 transform -translate-x-1/2 group-hover:translate-x-0"></span>
          </Link>
          <Link to="/About" className="group relative">
            About Us
            <span className="absolute left-1/2 bottom-0 h-[2px] w-0 bg-white transition-all duration-300 ease-in-out group-hover:w-full group-hover:left-0 transform -translate-x-1/2 group-hover:translate-x-0"></span>
          </Link>
        </div>
      {/* <div className="flex items-center gap-11 text-white text-xl font-semibold">
        <a href="/" className="relative hover:underline underline-offset-8">
          Home
        </a>
        <a href="/Service" className="relative hover:underline underline-offset-8">
          Services
        </a>
        <a href="/About" className="relative hover:underline underline-offset-8">
          About Us
        </a>
      </div> */}

      {/* Right: Cart + Buttons */}
      <div className="flex items-center gap-10 text-white font-medium text-lg">
        <div className="group relative w-12 h-12 flex items-center justify-center rounded-full transition duration-300 cursor-pointer hover:bg-white hover:shadow-md">
          {/* Cart Icon */}
          <MdOutlineShoppingCart className="text-white group-hover:text-[#013686] text-3xl transition" />

          {/* Red Badge */}
          {count > 0 && (
            <span className="absolute top-1 right-1 bg-red-600 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {count}
            </span>
          )}
        </div>

        <div className="relative inline-block text-left group">
          {/* <button className="flex items-center gap-2 bg-white text-[#003D99] text-xl font-semibold px-5 py-2 rounded-lg shadow-md border-[1px] border-white group-hover:bg-[#003D99] group-hover:text-white transition">
            <FiLogIn size={20} />
            Login
            <FiChevronDown
              size={20}
              className="group-hover:hidden transition duration-200"
            />
            <FiChevronUp
              size={20}
              className="hidden group-hover:inline transition duration-200"
            />
          </button> */}
<Link to="/login" className="inline-block">
  <button
    className="flex items-center gap-2 bg-white text-[#003D99] text-xl font-semibold px-5 py-2 rounded-lg shadow-md border-[1px] border-white group-hover:bg-[#003D99] group-hover:text-white transition"
  >
    <FiLogIn size={20} />
    Login
    <FiChevronDown size={20} className="group-hover:hidden transition duration-200" />
    <FiChevronUp size={20} className="hidden group-hover:inline transition duration-200" />
  </button>
</Link>
          
            <div className="absolute right-0 left-0.5 mt-0.5 w-42 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-500">
            <div className="py-1 text-[#003D99] flex flex-col items-center text-center">
              <Link
                to="/signup"
                className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-[#003D99] hover:text-white transition w-full justify-center"
              >
                <FiUserPlus size={18} />
                Signup
              </Link>

              <hr className="my-1 border-t border-gray-300 w-full" />

              <Link
                to="/profile"
                className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-[#003D99] hover:text-white transition w-full justify-center"
              >
                <CgProfile size={18} />
                My Profile
              </Link>

              <Link
                to="/myorders"
                className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-[#003D99] hover:text-white transition w-full justify-center"
              >
                <GiWallet size={18} />
                My Orders
              </Link>

              <Link
                to="/wallet"
                className="flex items-center gap-2 px-2 py-2 text-sm hover:bg-[#003D99] hover:text-white transition w-full justify-center"
              >
                <FaBoxOpen size={18} />
                My Wallet
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
// Compare this snippet from src/index.js: