import React, { useState } from "react";
import {
  FiEye,
  FiEyeOff,
} from "react-icons/fi";
import signupImg from "../assets/webp/signupImg.webp";
import { useFormik } from "formik";
import { registerSchema } from "../Pages/loginSchema/Schema";
import { userServices } from "../Instance/userServices.js";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../Common/FireBase.js";
import { Link } from "react-router-dom";
import BackgroundDecor from "./BackgroundDecor.jsx";

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (values, actions) => {
    // console.log('signup successfully')
    console.log(values);

    try {
      userServices
        .signup(values)
        .then((res) => {
          // dispatch({type:"REGISTER_SUCCESS"})
          console.log(res.data.message);
          // Console.log('Registered Successfully')
          // actions.resetForm()
          // navigate("/login")
        })
        .catch((err) => {
          console.log(err.response.data.message);
          // console.error(err.response.data.message)
        });
    } catch (error) {
      console.log(error.response.data.message);
      // console.error(error.message)
    }
  };

  const handleGoogle_signup = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      console.log(result);
    } catch (error) {
      console.log("could not sign in with google", error);
    }
  };

  const { values, handleBlur, handleChange, touched, errors, handleSubmit } =
    useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        // isVerified:"true"
      },
      validationSchema: registerSchema,
      onSubmit,
    });
  const errorCount = Object.keys(errors).length;

  return (
    <div className=" flex flex-col md:flex-row px-6 md:px-0 items-center justify-center md:items-start md:justify-normal relative">
      <BackgroundDecor/>
      {/* Left Image */}
      <div className="hidden w-full md:w-[38%] md:flex items-center justify-center md:ml-24 pr-16 ">
        <img src={signupImg} alt="Illustration" className=" max-w-md" />
      </div>

      <div className="w-full mt-[-220px] md:mt-[-170px] mb-10 md:mb-0 md:mr-44 md:ml-16 flex items-center justify-center px-4 bg-scroll">
      
        <form
          onSubmit={handleSubmit}
          className={`md:w-full px-2 md:px-0 pt-20 md:pt-0 bg-transparent mt-52 ${
            errorCount > 4 ? " md:mt-46" : " md:mt-60"
          }`}
        >
          <h2 className="mb-1 text-2xl md:text-[33px] font-semibold md:text-left">
            Sign up
          </h2>
          <p className="mb-6 text-xs md:text-lg md:text-left">
            Let’s get you all set up so you can access your personal account.
          </p>

          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative md:mb-4">
              <label
                htmlFor="firstName"
                className="absolute -top-3 left-3 bg-white px-1 text-sm md:text-base text-black"
              >
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                className="input-style"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.firstName && touched.firstName && (
                <p className="text-red-500 text-sm">{errors.firstName}</p>
              )}
            </div>
            <div className="relative md:mb-4 mb-4">
              <label
                htmlFor="lastName"
                className="absolute -top-3 left-3 bg-white px-1 text-sm md:text-base text-black"
              >
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                className="input-style"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.lastName && touched.lastName && (
                <p className="text-red-500 text-sm">{errors.lastName}</p>
              )}
            </div>
          </div>

          {/* Email & Mobile */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
            <div className="relative md:mb-4 mb-4">
              <label
                htmlFor="email"
                className="absolute -top-3 left-3 bg-white px-1 text-sm md:text-base text-black"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="input-style"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>
            <div className="relative md:mb-4 mb-4">
              <label
                htmlFor="mobile"
                className="absolute -top-3 left-3 bg-white px-1 text-sm md:text-base text-black"
              >
                Phone Number
              </label>
              <input
                id="mobile"
                name="mobile"
                type="tel"
                className="input-style pr-20"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <button
                type="button"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#515def] font-medium"
              >
                Verify
              </button>
              {errors.mobile && touched.mobile && (
                <p className="text-red-500 text-sm">{errors.mobile}</p>
              )}
            </div>
          </div>

          {/* Password Field */}
          <div className="relative mb-4 md:mb-4">
            <label
              htmlFor="password"
              className="absolute -top-3 left-3 bg-white px-1 text-sm md:text-base text-black"
            >
              Password
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
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </span>
            {errors.password && touched.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="relative mb-4 md:mb-4">
            <label
              htmlFor="confirmPassword"
              className="absolute -top-3 left-3 bg-white px-1 text-sm md:text-base text-black"
            >
              Confirm Password
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
              {showPassword ? <FiEye /> : <FiEyeOff />}
            </span>
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="text-red-500 text-sm">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-start mb-3 md:mb-5 text-sm md:text-base">
            <input type="checkbox" className="mr-2 mt-1" />
            <span>
              I agree to all the{" "}
              <span className="text-red-400 font-medium">Terms</span> and{" "}
              <span className="text-red-400 font-medium">Privacy Policies</span>
            </span>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-[#515def] text-white rounded-md hover:bg-[#013686] transition"
          >
            Create account
          </button>

          {/* Already have account */}
          <p className="text-center text-sm md:text-base mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-red-400 hover:underline">
              Login
            </Link>
          </p>

          {/* Social Signup */}
          {/* <div className="flex items-center my-5">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-xs md:text-sm text-gray-500">
              Or Sign up with
            </span>
            <hr className="flex-grow border-gray-300" />
          </div>
  <div className="flex justify-between gap-2">
                            <div className="relative group w-full border border-[#515def] rounded py-2 flex justify-center items-center overflow-hidden">
                              <div className="absolute bottom-0 left-0 w-full h-0 bg-blue-500 transition-all duration-500 group-hover:h-full z-0" />
                              <FaFacebookF className="h-5 w-5 text-gray-800 fa-icon group-hover:text-white group-hover:rotate-y-360 transition-all duration-500 relative z-10" />
                            </div>
                          
                            <div className="relative group w-full border border-[#515def] rounded py-2 flex justify-center items-center overflow-hidden">
                            <div className="absolute bottom-0 left-0 w-full h-0 bg-red-500 transition-all duration-500 group-hover:h-full z-0" onClick={handleGoogle_signup} />
                            <FaGoogle className="h-5 w-5 text-gray-800 fa-icon group-hover:text-white group-hover:rotate-y-360 transition-all duration-500 relative z-10" />
                          </div>
                          
                            <div className="relative group w-full border border-[#515def] rounded py-2 flex justify-center items-center overflow-hidden">
                              <div className="absolute bottom-0 left-0 w-full h-0 bg-gray-800 transition-all duration-500 group-hover:h-full z-0" />
                              <FaApple className="h-5 w-5 text-gray-800 fa-icon group-hover:text-white group-hover:rotate-y-360 transition-all duration-500 relative z-10" />
                            </div>
                          </div> */}
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
