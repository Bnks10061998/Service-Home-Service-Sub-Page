import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { Link } from "react-router-dom"; 
import logo from "../assets/webp/servy.webp";

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-800 pt-16 w-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-5 gap-8 px-4 md:px-10 lg:px-16 ">
        {/* Logo & Address */}
        <div className="md:col-span-1 ">
          <Link to="/" className="flex items-center gap-4 mb-4 group">
            <div className="w-16 h-16 rounded-full overflow-hidden bg-white border border-blue-600 shadow-sm flex items-center justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
              <img
                src={logo}
                alt="Servy Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-3xl font-bold text-blue-800 font-serif tracking-wide group-hover:text-blue-600 group-hover:scale-105 transition-all duration-300">
              Servy
            </span>
          </Link>

          <div className="flex items-start gap-2  text-gray-700 leading-relaxed max-w-xs">
            <MdLocationOn className="text-blue-700 text-lg mt-0.5" />
            <p className="text-base">
              No. 10, First cross street ,
              <br />
              Kagithapattarai, Vellore - 632000
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-3 text-blue-900 text-lg">
            Quick Links
          </h3>
          <ul className="text-base space-y-2 text-gray-700">
            <li>
              <a
                href="/home"
                className="hover:text-blue-600  hover:underline transition duration-300"
              >
                Home Page
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="hover:text-blue-600  hover:underline transition duration-300"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className="hover:text-blue-600  hover:underline transition duration-300"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                href="/terms"
                className="hover:text-blue-600  hover:underline transition duration-300"
              >
                Terms & Condition
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="hover:text-blue-600  hover:underline transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* For Customers */}
        <div>
          <h3 className="font-semibold mb-3 text-blue-900 text-lg">
            For Customers
          </h3>
          <ul className="text-base space-y-2  text-gray-700">
            <li>
              <a
                href="/services"
                className="hover:text-blue-600 hover:underline transition duration-300"
              >
                Browse Service
              </a>
            </li>
            <li>
              <a
                href="/bookings"
                className="hover:text-blue-600 hover:underline transition duration-300"
              >
                My Bookings
              </a>
            </li>
            <li>
              <a
                href="/support"
                className="hover:text-blue-600 hover:underline transition duration-300"
              >
                Customer Support
              </a>
            </li>
            <li>
              <a
                href="/feedback"
                className="hover:text-blue-600 hover:underline transition duration-300"
              >
                Feedback
              </a>
            </li>
          </ul>
        </div>

        {/* For Partners */}
        <div>
          <h3 className="font-semibold mb-3 text-blue-900 text-lg">
            For Partners
          </h3>
          <ul className="text-base space-y-2 text-gray-700">
            <li>
              <a
                href="/register"
                className="hover:text-blue-600 hover:underline transition duration-300"
              >
                Register as Professional
              </a>
            </li>
            <li>
              <a
                href="/login"
                className="hover:text-blue-600 hover:underline transition duration-300"
              >
                Professional Login
              </a>
            </li>
            <li>
              <a
                href="/help"
                className="hover:text-blue-600 hover:underline transition duration-300"
              >
                Help Center
              </a>
            </li>
          </ul>
        </div>

        {/* Social & Apps */}
        <div>
          <h3 className="font-semibold mb-3 text-blue-900 text-lg">
            Connect With Us
          </h3>
          <div className="flex gap-4 mb-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600"
            >
              <FaFacebookF className="text-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500"
            >
              <FaInstagram className="text-2xl" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500"
            >
              <FaYoutube className="text-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="https://play.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
                className="w-36 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-90 group-hover:shadow-lg"
              />
            </a>
            <a
              href="https://www.apple.com/app-store/"
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
                className="w-36 transition-transform duration-300 group-hover:scale-105 group-hover:opacity-90 group-hover:shadow-lg"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-gray-300 py-4 px-6 md:px-10 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
        <p className="text-gray-500 text-center md:text-left">
          &copy; {new Date().getFullYear()} Servy. All rights reserved.
        </p>
        <div className="flex gap-4 text-center md:text-right">
          <a
            href="/cookies"
            className="hover:underline transition duration-300"
          >
            Cookie Settings
          </a>
          <a
            href="/support"
            className="hover:underline transition duration-300"
          >
            Support
          </a>
          <a href="/legal" className="hover:underline transition duration-300">
            Legal
          </a>
        </div>
      </div>
    </footer>
  );
}
