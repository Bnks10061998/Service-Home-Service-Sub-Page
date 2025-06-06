
import React, { useState } from "react";
import { FaStar, FaUser, FaEnvelope, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import image from "../assets/feedback/Feedback2.png";

const FeedbackForm = () => {
  const navigate = useNavigate();
  const [rating, setRating] = useState(4);
  const [hover, setHover] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Username is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    console.log("Feedback submitted:", { ...formData, rating });

    setTimeout(() => {
      setShowThankYou(true);
      setIsSubmitting(false);
    }, 800);
  };

  const handleCancel = () => {
    const confirmReset = window.confirm("Clear all entered feedback?");
    if (confirmReset) {
      setFormData({ username: "", email: "", message: "" });
      setRating(0);
      setErrors({});
    }
  };

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {/* <div className="max-w-5xl mx-auto p-6 font-sans bg-white"> */}
      <div className="max-w-4xl w-full px-4 py-6 font-sans bg-white rounded-xl shadow-md">
        <div
          className={`${
            showThankYou ? "blur-sm pointer-events-none select-none" : ""
          }`}
        >
          <button
            onClick={() => window.history.back()}
            className="text-gray-500 text-sm mb-4 hover:underline"
          >
            &larr; Back
          </button>

          <h4 className="text-4xl font-bold text-[#003a84] mb-2">
            Customer Feedback
          </h4>
          <p className="text-sm text-gray-600 mb-6">
            Customer feedback is users' opinions about a product or service.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username */}
            <div className="flex items-center border rounded-xl overflow-hidden border-gray-300">
              <span className="p-3 text-gray-500">
                <FaUser />
              </span>
              <input
                autoFocus
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formData.username}
                onChange={handleChange}
                className="w-full h-[55px] px-4 outline-none"
              />
            </div>
            {errors.username && (
              <p className="text-sm text-red-600">{errors.username}</p>
            )}

            {/* Email */}
            <div className="flex items-center border rounded-xl overflow-hidden border-gray-300">
              <span className="p-3 text-gray-500">
                <FaEnvelope />
              </span>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[55px] px-4 outline-none"
              />
            </div>
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email}</p>
            )}

            {/* Star Rating */}
            <label className="block font-semibold text-base mt-4">
              Share your experience in scaling
            </label>
            <div className="flex gap-2 mb-2">
              {[...Array(5)].map((_, index) => {
                const currentRating = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={currentRating}
                      onClick={() => setRating(currentRating)}
                      className="hidden"
                    />
                    <FaStar
                      size={24}
                      className="cursor-pointer transition-colors"
                      color={
                        currentRating <= (hover || rating)
                          ? "#ffc107"
                          : "#e4e5e9"
                      }
                      onMouseEnter={() => setHover(currentRating)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>

            {/* Message */}
            <textarea
              name="message"
              rows="4"
              placeholder="Suggest anything we can improve..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-base resize-none"
            />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full h-[50px] bg-[#003a84] text-white rounded-lg font-medium hover:bg-[#002a5e] transition ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Feedback"}
            </button>

            {/* Cancel Button */}
            <button
              type="button"
              className="w-full h-[50px] border-2 border-[#003a84] text-[#003a84] rounded-lg font-medium hover:bg-[#003a84] hover:text-white transition"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </form>
        </div>

        {/* Thank You Overlay */}
        {showThankYou && (
          <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50">
            <div className="relative w-[90%] max-w-2xl h-[400px] bg-[#f5f9ff] rounded-2xl shadow-xl overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{ backgroundImage: `url(${image})` }}
              />
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center px-4">
                <p className="mb-0 font-semibold text-base text-[#003a84]">
                  Thank you for your Valuable Comments
                </p>
                <button
                  className="bg-[#003a84] text-white px-6 py-2 rounded-lg shadow-md flex items-center gap-2 mx-auto hover:bg-[#002a5e]"
                  onClick={handleBackToHome}
                >
                  <FaHome /> Back to Home
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackForm;
