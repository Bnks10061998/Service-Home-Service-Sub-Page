import React, { useState } from "react";
import {
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import VerifyImg from "../assets/webp/VerifyImg.webp";
import { useFormik } from "formik";
import { reset_password } from "../Pages/loginSchema/Schema";
import BackgroundDecor from "./BackgroundDecor";

const SetPasswordScreen = () => {
  const [showPassword, setShowPassword] = useState(false);
  const onSubmit = (values) => {
   
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
      password: "",
     
    },
    validationSchema: reset_password,
    onSubmit,
  });

  return (
     <div
            className="flex flex-col md:flex-row px-6 md:px-0 items-center justify-center md:items-start md:justify-normal relative"
           
          >
          <BackgroundDecor/>
          {/* Left */}
          <div className="w-full md:w-1/2 flex justify-center items-center mt-20 md:mt-32">
        <form className="w-full max-w-lg px-4 md:px-0 " onSubmit={handleSubmit} >
        
        {/* <button className="flex items-center gap-2 font-light text-sm mb-4">
        <FiChevronLeft className="text-lg" />
         Back to login
       </button> */}
          <h2 className="mb-2 text-[26px] md:text-[33px] font-semibold">
          Set a password
          </h2> 
          <p className="mb-12 text-[12px] md:text-[15px] ">
          Your previous password has been reseted. Please set a new password for your account.</p>

          
          {/* Email Input */}
          
          <div className="relative mb-6 md:mb-8">
          <label
            htmlFor="password"
            className="absolute -top-3 left-3 bg-white bg-opacity-30 px-1 text-sm md:text-base text-black rounded-lg"
          >
          Create  Password
          </label>
          <input
    type={showPassword ? "text" : "password"}
    id="password"
    name="password"
    className="input-style"
    value={values.password}
    onChange={handleChange}
    onBlur={handleBlur}
  />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3.5 text-black cursor-pointer"
          >
           {showPassword ?  <FiEye /> : <FiEyeOff />}
          </span>
          {errors.password && touched.password && (
    <p className="text-red-500 text-sm">{errors.password}</p>
  )}
        </div>
        <div className="relative  mb-4 md:mb-8">
          <label
            htmlFor="password"
            className="absolute -top-3 left-3 bg-white bg-opacity-30 px-1 text-sm md:text-base text-black rounded-lg"
          >
          Re-enter Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="confirmPassword"
    name="confirmPassword"
    className="input-style"
    value={values.confirmPassword}
    onChange={handleChange}
    onBlur={handleBlur}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3.5 text-black cursor-pointer"
          >
            {showPassword ?  <FiEye /> : <FiEyeOff />}
          </span>
          {errors.confirmPassword && touched.confirmPassword && (
    <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
  )}
        </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-[#515def] text-white rounded-md hover:bg-[#013686] transition"
          >
             Set Password
          </button>
        
        </form>
      </div>
    
    <div className="hidden md:flex w-1/2 items-center justify-center pr-32 mt-2">
      <img
        src={VerifyImg}
        alt="Illustration"
        className="  max-w-md"
      />
    </div>
    
        </div>
    
  );
};

export default SetPasswordScreen;
