


import React, { useState } from "react";
import {
 
  FiChevronLeft 
} from "react-icons/fi";
import fypImg from "../assets/fypImg.png";
import bgImage from "../assets/bgImg.png";
import EllipseRight from "../assets/EllipseRight.png";
import { useFormik } from "formik";
import { forgot_password } from "../Pages/loginSchema/Schema";
import { toast } from 'react-toastify';
import { userServices } from "../Instance/userServices.js";

const ForgotPasswordScreen = () => {
  const [showCodeField, setShowCodeField] = useState(true); // <-- to control code input
  const [loading, setLoading] = useState(false); // Optional: loading state
  const [isClicked, setIsClicked] = useState(false);

  const onSubmit = (values, actions) => {
    if (!showCodeField) {
      // First phase: send email to backend
      setLoading(true);
      userServices.forgot_password(values)
        .then((res) => {
          toast.success(res?.data?.message || "Email sent!");
          setShowCodeField(true); // Show code field on success
        })
        .catch((err) => {
          toast.error(err?.response?.data?.message || "Something went wrong");
        })
        .finally(() => setLoading(false));
    } else {
      // Second phase: handle code verification
      toast.success("Code verified successfully!");
      // You can call userServices.verify_code(...) here
    }
  };

  const {
    values,
    handleBlur,
    handleChange,
    touched,
    errors,
    handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      code: "",
    },
    validationSchema: forgot_password, // You may want a separate schema for phase 2
    onSubmit,
  });

  const handleClick = async (e) => {
    e.preventDefault(); // stop page refresh
    
    if (isClicked) return; // prevent double click
    
    setIsClicked(true); // trigger animation
    
    // Wait for animation (optional small delay)
    setTimeout(() => {
      handleSubmit(); // 🔥 submit form after animation start
    }, 900); // 0.5 sec delay
  };

  return (
    <div className="min-h-screen h-screen flex flex-col md:flex-row px-6 md:px-0 items-center justify-center md:items-start md:justify-normal relative">
      {/* Background and Ellipses code unchanged */}
      <img
          src={bgImage}
          alt="Background"
          className="fixed bottom-0 left-0 w-full z-[-1] h-[120%] "
        />
      <img
        src={EllipseRight}
        alt="Top Right"
        className="fixed top-0 right-[-20px] m-2 md:m-4 w-20 md:w-28 h-auto z-0"
      />
      
      <img
        src={EllipseRight}
        alt="Top Left"
        className="fixed top-10 md:top-0 left-0 m-2 md:m-4 w-20 md:w-28 h-auto z-0 rotate-[270deg]"
      />
      
      <img
        src={EllipseRight}
        alt="Bottom Left"
        className="fixed top-20 left-[-10px] m-2 md:m-4 w-20 md:w-28 h-auto z-0 rotate-[180deg] "
      />

      <div className="w-full md:w-1/2 flex justify-center items-center mt-6 md:mt-28 md:ml-20">
        <form className="w-full max-w-lg px-4 md:px-0" onSubmit={handleSubmit}>
          {/* Back Button */}
          <button type="button" className="flex items-center gap-2 font-light text-sm mb-4">
            <FiChevronLeft className="text-lg" />
            Back to login
          </button>

          {/* Heading */}
          <h2 className="mb-1 text-[26px] md:text-[33px] font-semibold">
            Forgot your password?
          </h2>
          <p className="mb-8 text-xs md:text-base">
            Don’t worry, happens to all of us. Enter your email below to recover your password
          </p>

          {/* Email Field */}
          <div className="relative mb-8">
            <label htmlFor="email" className="absolute -top-3 left-3 bg-white bg-opacity-30 px-1 text-sm md:text-base text-black">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john.doe@gmail.com"
              className="input-style"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              disabled={showCodeField} // Disable once email is submitted
            />
            {errors.email && touched.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Code Field (only visible if email phase is done) */}
          {showCodeField && (
            <>
              <div className="relative mb-6">
                <label htmlFor="code" className="absolute -top-3 left-3 bg-white bg-opacity-30 px-1 text-sm md:text-base text-black">
                  Enter Code
                </label>
                <input
                  id="code"
                  name="code"
                  type="text"
                  className="input-style"
                  value={values.code}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-12">
                <span>
                  Didn’t receive a code?{" "}
                  <span className="text-red-400 font-medium cursor-pointer">Resend</span>
                </span>
              </div>
            </>
          )}

          {/* Submit / Verify Button */}
          {showCodeField ? (
  <div className="vButton">
    <button
      type="button"
      onClick={handleClick}
      className={`myButton w-full h-10 rounded-full transition overflow-hidden relative ${
        isClicked
          ? "circle border-2 border-[#515def] bg-white text-[#515def]"
          : "bg-[#515def] text-white hover:bg-[#013686]"
      }`}
    >
      <span className={isClicked ? "click" : ""}>Verify</span>
    </button>
  </div>
) : (
  <button
    type="submit"
    className="w-full py-2 bg-[#515def] text-white rounded-md hover:bg-[#013686] transition"
    disabled={loading}
  >
    {loading ? "Loading..." : "Submit"}
  </button>
)}

        </form>
      </div>

      {/* Right Illustration */}
      <div className="hidden md:flex w-1/2 items-center justify-center pr-28 mt-28">
        <img src={fypImg} alt="Illustration" className="object-contain" />
      </div>
    </div>
  );
};

export default ForgotPasswordScreen;

